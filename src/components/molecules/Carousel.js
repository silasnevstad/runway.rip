"use client";

import React, {
    useState,
    useEffect,
    useRef,
    useCallback,
    Children,
    cloneElement
} from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

/**
 * Carousel Props
 * ---------------
 * - mode: "single" | "multi"
 * - children: the slides
 *
 * - currentIndex?: number (controlled index from parent)
 * - onChange?: (index: number) => void (callback when index changes)
 * - infinite?: boolean (wrap around)
 * - autoPlay?: boolean
 * - interval?: number (ms for autoPlay)
 * - showArrows?: boolean
 * - showIndicators?: boolean
 *
 * - fadeCenter?: boolean (fade/scale the active slide)
 * - scaleCenter?: number (scale factor for the active slide)
 * - sideOpacity?: number (opacity for non-active slides)
 *
 * - margin?: number (only used in multi mode, sets `mx-${margin}` for gap)
 */
export default function Carousel({
    mode = "single",
    children,
    currentIndex,
    onChange,
    infinite = false,
    autoPlay = false,
    interval = 3000,
    showArrows = true,
    showIndicators = true,
    fadeCenter = false,
    scaleCenter = 1.0,
    sideOpacity = 0.6,
    margin = 2
}) {
    const itemCount = Children.count(children);

    // If no external index, we manage internal state
    const [internalIndex, setInternalIndex] = useState(0);
    const activeIndex = currentIndex ?? internalIndex;

    const setActiveIndex = useCallback(
        (idx) => {
            if (currentIndex == null) {
                setInternalIndex(idx);
            }
            if (onChange) onChange(idx);
        },
        [currentIndex, onChange]
    );

    // Next/Prev
    const goNext = useCallback(() => {
        if (itemCount < 2) return;
        if (infinite) {
            setActiveIndex((activeIndex + 1) % itemCount); // (activeIndex + 1) % itemCount = 1, 2, 3, 0, 1, 2, 3, 0, ...
        } else {
            setActiveIndex((activeIndex + 1) % itemCount);
        }
    }, [activeIndex, infinite, itemCount, setActiveIndex]);

    const goPrev = useCallback(() => {
        if (itemCount < 2) return;
        if (infinite) {
            setActiveIndex((activeIndex - 1 + itemCount) % itemCount);
        } else {
            setActiveIndex(Math.max(activeIndex - 1, 0));
        }
    }, [activeIndex, infinite, itemCount, setActiveIndex]);

    // Auto-play
    const intervalRef = useRef(null);
    useEffect(() => {
        if (!autoPlay || itemCount <= 1) return;
        intervalRef.current = setInterval(() => {
            goNext();
        }, interval);

        return () => clearInterval(intervalRef.current);
    }, [autoPlay, interval, goNext, itemCount, activeIndex]);

    if (mode === "single") {
        return (
            <SingleCarousel
                children={children}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                itemCount={itemCount}
                goPrev={goPrev}
                goNext={goNext}
                showArrows={showArrows}
                showIndicators={showIndicators}
                infinite={infinite}
                fadeCenter={fadeCenter}
                scaleCenter={scaleCenter}
                sideOpacity={sideOpacity}
            />
        );
    } else {
        return (
            <MultiCarousel
                children={children}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                itemCount={itemCount}
                goPrev={goPrev}
                goNext={goNext}
                showArrows={showArrows}
                showIndicators={showIndicators}
                infinite={infinite}
                fadeCenter={fadeCenter}
                scaleCenter={scaleCenter}
                sideOpacity={sideOpacity}
                margin={margin}
            />
        );
    }
}

/**
 * SINGLE-ITEM MODE
 * We measure:
 *   - The container's width
 *   - The child's (slide) width
 *
 * Then we center the active slide: xPos = offset * childWidth + (containerWidth - childWidth) / 2.
 * Because offset=0 => xPos = (containerWidth - childWidth)/2 => truly centered in container.
 * If offset=1 => xPos = childWidth + (containerWidth - childWidth)/2 => one child to the right of center.
 */
function SingleCarousel({
                            children,
                            activeIndex,
                            setActiveIndex,
                            itemCount,
                            goPrev,
                            goNext,
                            showArrows,
                            showIndicators,
                            infinite,
                            fadeCenter,
                            scaleCenter,
                            sideOpacity
                        }) {
    const containerRef = useRef(null);
    const [containerWidth, setContainerWidth] = useState(0);
    const [childWidth, setChildWidth] = useState(0);

    // Measure container + single slide width
    useEffect(() => {
        if (!containerRef.current) return;

        // container width
        const cRect = containerRef.current.getBoundingClientRect();
        setContainerWidth(cRect.width);

        // measure first child
        const firstSlide = containerRef.current.querySelector(".single-slide");
        if (firstSlide) {
            const fRect = firstSlide.getBoundingClientRect();
            setChildWidth(fRect.width);
        }
    }, [children]);

    // Render slides
    const slides = Children.map(children, (child, i) => {
        let offset = i - activeIndex;

        // If infinite, re-map offset to small range around 0
        if (infinite) {
            const half = Math.floor(itemCount / 2);
            if (offset < -half) offset += itemCount;
            if (offset > half) offset -= itemCount;
        }
        const isCenter = offset === 0;

        // xPos => offset * childWidth + centerShift
        // centerShift = (containerWidth - childWidth)/2 => ensures offset=0 => center
        const centerShift = (containerWidth - childWidth) / 2;
        const xPos = offset * childWidth + centerShift;

        const transformList = [`translateX(${xPos}px)`];
        // If you also want vertical centering:
        transformList.push("translateY(-50%)");

        if (isCenter && fadeCenter && scaleCenter !== 1.0) {
            transformList.push(`scale(${scaleCenter})`);
        }
        const transform = transformList.join(" ");
        const opacity = !isCenter && fadeCenter ? sideOpacity : 1;

        return (
            <div
                key={i}
                className="single-slide absolute top-1/2 left-0 transition-all duration-300 ease-in-out"
                style={{ transform, opacity }}
            >
                {cloneElement(child, { isActive: isCenter })}
            </div>
        );
    });

    return (
        <div
            ref={containerRef}
            className="relative w-full h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden"
        >
            {slides}

            {showArrows && itemCount > 1 && (
                <>
                    <button
                        onClick={goPrev}
                        className="absolute top-1/2 left-3 -translate-y-1/2 p-2 bg-gray-100 text-gray-700 rounded-full hover:scale-110 transition-all z-10"
                    >
                        <FaChevronLeft />
                    </button>
                    <button
                        onClick={goNext}
                        className="absolute top-1/2 right-3 -translate-y-1/2 p-2 bg-gray-100 text-gray-700 rounded-full hover:scale-110 transition-all z-10"
                    >
                        <FaChevronRight />
                    </button>
                </>
            )}

            {showIndicators && itemCount > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {Array.from({ length: itemCount }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            className={`w-3 h-3 rounded-full transition-all hover:scale-110 ${
                                i === activeIndex ? "bg-primary-500 scale-110" : "bg-gray-300"
                            }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

/**
 * MULTI-ITEM MODE
 * We do the simpler approach: measure one item’s width, shift by activeIndex * itemWidth.
 * Optionally fade/scale the center item if fadeCenter is true (the “activeIndex”).
 */
function MultiCarousel({
    children,
    activeIndex,
    setActiveIndex,
    itemCount,
    goPrev,
    goNext,
    showArrows,
    showIndicators,
    infinite,
    fadeCenter,
    scaleCenter,
    sideOpacity,
    margin
}) {
    const trackRef = useRef(null);
    const [itemWidth, setItemWidth] = useState(0);

    // measure the first item for width
    useEffect(() => {
        if (!trackRef.current) return;
        const first = trackRef.current.querySelector(".carousel-item");
        if (!first) return;
        const fRect = first.getBoundingClientRect();
        setItemWidth(fRect.width);
    }, [children]);

    // translateX
    const translateX = -(activeIndex * itemWidth) - (activeIndex * margin * 8) - (itemWidth / 2);

    const slides = Children.map(children, (child, i) => {
        const isCenter = i === activeIndex;
        const style = isCenter
            ? { transform: `scale(${scaleCenter})`, transition: "transform 0.3s ease" }
            : fadeCenter
                ? { opacity: sideOpacity }
                : {};

        return (
            <div
                key={i}
                className={`carousel-item flex-shrink-0 mx-${margin}`}
                style={style}
            >
                {cloneElement(child, { isActive: isCenter })}
            </div>
        );
    });

    return (
        <div className="relative w-full overflow-hidden">
            <div
                ref={trackRef}
                className={`flex transition-transform duration-300 ease-in-out ${!infinite && 'translate-x-1/2'}`}
                style={{ transform: `translateX(${translateX}px)` }}
            >
                {/* if infinite is true, duplicate the slides */}
                {infinite && itemCount > 1
                    ? [
                        slides[slides.length - 1],
                        ...slides,
                        slides[0]
                    ]
                    : slides}
            </div>

            {showArrows && itemCount > 1 && (
                <>
                    <button
                        onClick={goPrev}
                        className="absolute top-1/2 left-3 -translate-y-1/2 p-2 bg-gray-100 text-gray-700 rounded-full hover:scale-110 transition-all z-10"
                    >
                        <FaChevronLeft />
                    </button>
                    <button
                        onClick={goNext}
                        className="absolute top-1/2 right-3 -translate-y-1/2 p-2 bg-gray-100 text-gray-700 rounded-full hover:scale-110 transition-all z-10"
                    >
                        <FaChevronRight />
                    </button>
                </>
            )}

            {showIndicators && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {Array.from({ length: itemCount }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            className={`w-3 h-3 rounded-full transition-all hover:scale-110 ${
                                i === activeIndex ? "bg-primary-500 scale-110" : "bg-gray-300"
                            }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

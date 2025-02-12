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
 * Carousel Props:
 *
 * Required:
 *   mode: "single" | "multi"
 *   children: slide elements
 *
 * Optional:
 *   currentIndex?: number (externally control which slide is active)
 *   onChange?(index: number): void (callback when active slide changes)
 *   infinite?: boolean (wrap from last->first in an "infinite" manner)
 *   autoPlay?: boolean
 *   interval?: number (ms for autoPlay)
 *   showArrows?: boolean
 *   showIndicators?: boolean
 *
 *   fadeCenter?: boolean (whether to fade/scale the "active" slide)
 *   scaleCenter?: number (scale factor for the active slide)
 *   sideOpacity?: number (opacity for non-active slides)
 *
 *   margin?: number (when mode="multi", sets the "mx-{margin}" class for gap)
 *
 * Usage:
 *   <Carousel mode="single" fadeCenter infinite autoPlay interval={3000}>
 *     <div>Slide 1</div>
 *     <div>Slide 2</div>
 *     ...
 *   </Carousel>
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

    // Internal state if not provided from parent
    const [internalIndex, setInternalIndex] = useState(0);
    const activeIndex = currentIndex != null ? currentIndex : internalIndex;

    // Helper to safely update activeIndex
    const setActiveIndex = useCallback(
        (newIndex) => {
            // If there's no controlled index from parent, update internal state
            if (currentIndex == null) {
                setInternalIndex(newIndex);
            }
            if (onChange) onChange(newIndex);
        },
        [currentIndex, onChange]
    );

    // Next / Prev
    const goNext = useCallback(() => {
        if (itemCount < 2) return; // no slides to move
        if (infinite) {
            setActiveIndex((activeIndex + 1 + itemCount) % itemCount);
        } else {
            setActiveIndex(Math.min(activeIndex + 1, itemCount - 1));
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
    const autoPlayRef = useRef(null);
    useEffect(() => {
        if (!autoPlay || itemCount <= 1) return;
        autoPlayRef.current = setInterval(() => {
            goNext();
        }, interval);
        return () => clearInterval(autoPlayRef.current);
    }, [autoPlay, interval, goNext, itemCount, activeIndex]);

    // Decide which sub-component to use
    return mode === "single" ? (
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
    ) : (
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

/**
 * SINGLE-ITEM mode
 * Each slide is absolutely positioned. The center slide is offset by (offset * 100%) - 50% =>
 * offset=0 => -50% => centered in container
 *
 * If infinite=true, we re-map offset to keep slides in a small range around 0.
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
    const slides = Children.map(children, (child, i) => {
        let offset = i - activeIndex;
        if (infinite) {
            const half = Math.floor(itemCount / 2);
            if (offset < -half) offset += itemCount;
            if (offset > half) offset -= itemCount;
        }
        const isCenter = (offset === 0);

        // xPos: shift horizontally so that offset=0 => -50% => center in container
        const xPos = offset * 100 - 50;
        const transformList = [`translateX(${xPos}%) translateY(-50%)`];
        if (isCenter && fadeCenter && scaleCenter !== 1.0) {
            transformList.push(`scale(${scaleCenter})`);
        }

        const transform = transformList.join(" ");
        const opacity = !isCenter && fadeCenter ? sideOpacity : 1;

        return (
            <div
                key={i}
                className="absolute top-1/2 left-1/2 transition-all duration-300 ease-in-out"
                style={{ transform, opacity }}
            >
                {cloneElement(child, { isActive: isCenter })}
            </div>
        );
    });

    return (
        <div className="relative w-full h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden">
            {slides}

            {/* Arrows */}
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

            {/* Indicators */}
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
 * MULTI-ITEM mode
 * Renders slides in a horizontal row. Clicking next or prev shifts by
 * exactly one slide's width. If infinite=true, we just “jump” from last to first
 * or first to last (no complicated duplication).
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

    // Measure first child to know how many px to shift each time
    useEffect(() => {
        if (!trackRef.current) return;
        const first = trackRef.current.querySelector(".carousel-item");
        if (!first) return;
        const rect = first.getBoundingClientRect();
        setItemWidth(rect.width);
    }, [children]);

    // If infinite, the “activeIndex” effectively wraps around 0..(itemCount-1).
    // We do that logic in goNext/goPrev. We'll just compute translation from activeIndex here:
    const translateX = -(activeIndex * itemWidth);

    const slides = Children.map(children, (child, i) => {
        // Optionally fade/scale the “active” item
        const isCenter = fadeCenter && i === activeIndex;
        const style = isCenter
            ? {
                transform: `scale(${scaleCenter})`,
                transition: "transform 0.3s ease"
            }
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
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(${translateX}px)` }}
            >
                {slides}
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

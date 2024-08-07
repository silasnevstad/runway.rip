'use client';

import React, { useEffect, useRef, useState } from "react";

const Carousel = ({
    children,
    autoPlay = false,
    interval = 3000,
    fadeLeft = false,
    fadeRight = false,
    mode = 'swipe', // 'swipe' or 'scroll'
    scrollSpeed = 1, // pixels per frame for scroll mode
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [scrollPosition, setScrollPosition] = useState(0);
    const containerRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        if (mode === 'swipe' && autoPlay) {
            const timer = setInterval(() => {
                setCurrentIndex((prevIndex) =>
                    (prevIndex + 1) % React.Children.count(children)
                );
            }, interval);

            return () => clearInterval(timer);
        }
    }, [autoPlay, children, interval, mode]);

    useEffect(() => {
        if (mode === 'scroll') {
            const scrollStep = () => {
                setScrollPosition((prevPosition) => {
                    const containerWidth = containerRef.current.offsetWidth;
                    const contentWidth = contentRef.current.scrollWidth / 2; // Divide by 2 because content is duplicated
                    const newPosition = (prevPosition + scrollSpeed) % contentWidth;

                    // If we've scrolled past the first set of items, jump back to the start
                    if (newPosition + containerWidth > contentWidth) {
                        return newPosition - contentWidth;
                    }
                    return newPosition;
                });
                requestAnimationFrame(scrollStep);
            };
            const animationFrameId = requestAnimationFrame(scrollStep);

            return () => cancelAnimationFrame(animationFrameId);
        }
    }, [mode, scrollSpeed]);

    const fadeStyle = (side) => `
        absolute top-0 bottom-0 ${side}-0 w-1/5 pointer-events-none z-10
        bg-gradient-to-${side === 'left' ? 'r' : 'l'}
        from-bg-50 to-transparent
        dark:from-bg-900 dark:to-transparent
    `;

    const renderContent = () => {
        const content = React.Children.map(children, (child, index) => (
            <div key={index} className={`flex-shrink-0 ${mode === 'swipe' ? 'w-full' : 'mr-4'}`}>
                {child}
            </div>
        ));

        if (mode === 'scroll') {
            // Duplicate content for seamless looping
            return [...content, ...content];
        }

        return content;
    };

    return (
        <div className="relative overflow-hidden" ref={containerRef}>
            {fadeLeft && <div className={fadeStyle('left')} />}
            <div
                ref={contentRef}
                className={`flex ${mode === 'swipe' ? 'transition-transform duration-300 ease-in-out' : ''}`}
                style={{
                    transform: mode === 'swipe'
                        ? `translateX(-${currentIndex * 100}%)`
                        : `translateX(-${scrollPosition}px)`,
                    width: mode === 'scroll' ? '200%' : '100%', // Double width for scroll mode
                }}
            >
                {renderContent()}
            </div>
            {fadeRight && <div className={fadeStyle('right')} />}
        </div>
    );
};

export default Carousel;
'use client';

import React, { useEffect, useRef, useState, useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Carousel = ({
    children,
    autoPlay = false,
    interval = 3000,
    fadeLeft = false,
    fadeRight = false,
    mode = 'swipe',
    scrollSpeed = 1,
    showArrows = false,
    showIndicators = false,
    fullWidth = false,
    selectedItem = 0,
    onItemChange = null,
    containerWidth = 'w-full', // New prop to control container width
}) => {
    const [currentIndex, setCurrentIndex] = useState(selectedItem);
    const [scrollPosition, setScrollPosition] = useState(0);
    const containerRef = useRef(null);
    const contentRef = useRef(null);
    const itemCount = React.Children.count(children);

    const goToIndex = useCallback((index) => {
        const newIndex = (index + itemCount) % itemCount;
        setCurrentIndex(newIndex);
        if (onItemChange) onItemChange(newIndex);
    }, [itemCount, onItemChange]);

    useEffect(() => {
        if (autoPlay) {
            const timer = setInterval(() => {
                goToIndex(currentIndex + 1);
            }, interval);

            return () => clearInterval(timer);
        }
    }, [autoPlay, interval, currentIndex, goToIndex]);

    useEffect(() => {
        if (mode === 'scroll') {
            const scrollStep = () => {
                setScrollPosition((prevPosition) => {
                    const containerWidth = containerRef.current.offsetWidth;
                    const contentWidth = contentRef.current.scrollWidth / 2;
                    const newPosition = (prevPosition + scrollSpeed) % contentWidth;

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
        dark:from-bg-900/20 dark:to-transparent
    `;

    const renderContent = () => {
        const content = React.Children.map(children, (child, index) => (
            <div key={index} className={`shrink-0 ${fullWidth ? 'w-full' : ''}`}>
                {child}
            </div>
        ));

        return mode === 'scroll' ? [...content, ...content] : content;
    };

    const ArrowButton = ({ direction }) => (
        <button
            className={`absolute top-1/2 -translate-y-1/2 ${direction === 'left' ? '-left-12' : '-right-12'} 
                       hover:scale-105 transition-all duration-200 ease-in-out`}
            onClick={() => goToIndex(direction === 'left' ? currentIndex - 1 : currentIndex + 1)}
        >
            {direction === 'left' ? <FaChevronLeft className="w-6 h-6" /> : <FaChevronRight className="w-6 h-6" />}
        </button>
    );

    return (
        <div className={`relative ${containerWidth}`}>
            {showArrows && mode === 'swipe' && (
                <>
                    <ArrowButton direction="left" />
                    <ArrowButton direction="right" />
                </>
            )}
            <div className="overflow-hidden" ref={containerRef}>
                {fadeLeft && <div className={fadeStyle('left')} />}
                <div
                    ref={contentRef}
                    className={`flex ${mode === 'swipe' ? 'transition-transform duration-300 ease-in-out' : ''}`}
                    style={{
                        transform: mode === 'swipe'
                            ? `translateX(-${currentIndex * 100}%)`
                            : `translateX(-${scrollPosition}px)`,
                        width: mode === 'scroll' ? '200%' : '100%',
                    }}
                >
                    {renderContent()}
                </div>
                {fadeRight && <div className={fadeStyle('right')} />}
            </div>
            {showIndicators && mode === 'swipe' && (
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
                    {[...Array(itemCount)].map((_, index) => (
                        <button
                            key={index}
                            className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-primary-500' : 'bg-gray-300'}`}
                            onClick={() => goToIndex(index)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Carousel;
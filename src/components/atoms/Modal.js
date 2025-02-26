"use client";
import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function Modal({
    children,
    isOpen,
    onClose,
    fade = true,
    blur = true,
    closeOnOutsideClick = true,
    showCloseButton = true,
    className = "",
    ...props
}) {
    const backdropRef = useRef(null);

    const handleBackdropClick = (e) => {
        if (!closeOnOutsideClick) return;
        if (backdropRef.current === e.target) onClose?.();
    };

    // Trap focus
    useEffect(() => {
        if (!isOpen) return;
        const el = backdropRef.current;
        if (!el) return;

        const focusable = el.querySelectorAll(
            'a[href], button:not([disabled]), textarea, input, select'
        );
        if (!focusable.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        const onKeyDown = (event) => {
            if (event.key === 'Tab') {
                if (event.shiftKey && document.activeElement === first) {
                    event.preventDefault();
                    last.focus();
                } else if (!event.shiftKey && document.activeElement === last) {
                    event.preventDefault();
                    first.focus();
                }
            }
        };

        el.addEventListener('keydown', onKeyDown);
        return () => el.removeEventListener('keydown', onKeyDown);
    }, [isOpen]);

    if (!isOpen) return null;

    return createPortal(
        <div
            ref={backdropRef}
            onMouseDown={handleBackdropClick}
            className={[
                'fixed inset-0 z-[9999] flex items-center justify-center',
                fade ? 'bg-black/50' : '',
                blur ? 'backdrop-blur' : '',
                className,
            ].join(' ')}
            {...props}
        >
            {showCloseButton && (
                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 text-gray-400 hover:text-gray-200"
                >
                    <XMarkIcon className="h-8 w-8" />
                </button>
            )}

            {children}
        </div>,
        document.body
    );
}

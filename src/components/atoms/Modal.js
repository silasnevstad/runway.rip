'use client';

import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({
    children,
    isOpen,
    onClose,
    className = '',
}) => {
    const modalRef = useRef();

    const handleBackdropClick = (e) => {
        if (modalRef.current === e.target) {
            onClose?.();
        }
    };

    useEffect(() => {
        const focusableModalElements = modalRef.current.querySelectorAll(
            'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled])'
        );
        const firstElement = focusableModalElements[0];
        const lastElement = focusableModalElements[focusableModalElements.length - 1];

        const handleFocus = (event) => {
            if (event.shiftKey) {
                if (document.activeElement === firstElement) {
                    lastElement.focus();
                    event.preventDefault();
                }
            } else {
                if (document.activeElement === lastElement) {
                    firstElement.focus();
                    event.preventDefault();
                }
            }
        };

        modalRef.current.addEventListener('keydown', handleFocus);

        return () => {
            modalRef.current.removeEventListener('keydown', handleFocus);
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return createPortal(
        <div className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ${className}`} ref={modalRef} onClick={handleBackdropClick}>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-md mx-auto z-50 overflow-y-auto">
                {children}
            </div>
        </div>,
        document.body
    );
};

export default Modal;

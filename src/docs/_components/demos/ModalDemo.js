"use client";

import React, { useEffect, useState } from "react";
import Modal from "@/components/atoms/Modal";
import Button from "@/components/atoms/Button";

export default function ModalDemo({
    children,
    fade,
    blur,
    closeOnOutsideClick,
    showCloseButton,
    backdropClassName,
    contentClassName,
}) {
    const [isMounted, setIsMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleOpen = () => setIsOpen(true);
    const onClose = () => setIsOpen(false);

    if (!isMounted) return null;

    return (
        <div className="flex flex-col gap-4">
            <Button onClick={handleOpen}>Open Modal</Button>

            <Modal
                isOpen={isOpen}
                onClose={onClose}
                fade={fade}
                blur={blur}
                closeOnOutsideClick={closeOnOutsideClick}
                showCloseButton={showCloseButton}
                backdropClassName={backdropClassName}
                contentClassName={contentClassName}
            >
                {children}
            </Modal>
        </div>
    );
}
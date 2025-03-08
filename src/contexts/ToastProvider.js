"use client";

import React, {
    createContext,
    useContext,
    useState,
    useCallback,
    useEffect,
} from "react";
import { createPortal } from "react-dom";
import Toast from "@/components/atoms/Toast";
import { v4 as uuidv4 } from "uuid";

// Create the Toast context.
const ToastContext = createContext(null);

export function ToastProvider({
    children,
    autoDismiss = true,           // Global auto-dismiss toggle
    autoDismissTimeout = 5000,     // Global auto-dismiss timeout (ms)
    newestOnTop = false,           // New toasts on top
    placement = "bottom-right",    // "top-right", "top-left", "bottom-right", "bottom-left"
    portalTargetSelector,          // Optional CSS selector for portal target (defaults to body)
    transitionDuration = 500,      // Duration (ms) for toast transitions
}) {
    const [toasts, setToasts] = useState([]);
    const [mounted, setMounted] = useState(false);

    // Set mounted flag to true after first render.
    useEffect(() => {
        setMounted(true);
    }, []);

    // Add a new toast.
    const addToast = useCallback((content, options = {}) => {
        const id = options.id || uuidv4();
        setToasts((prev) => {
            if (prev.some((t) => t.id === id)) return prev;
            const newToast = { id, content, ...options };
            return newestOnTop ? [newToast, ...prev] : [...prev, newToast];
        });
        return id;
    }, [newestOnTop]);

    // Remove a toast by its ID.
    const removeToast = useCallback((id) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    }, []);

    // Update an existing toast.
    const updateToast = useCallback((id, options = {}) => {
        setToasts((prev) => {
            const index = prev.findIndex((t) => t.id === id);
            if (index === -1) return prev;
            const updatedToast = { ...prev[index], ...options };
            return [...prev.slice(0, index), updatedToast, ...prev.slice(index + 1)];
        });
    }, []);

    // Remove all toasts.
    const removeAllToasts = useCallback(() => {
        setToasts([]);
    }, []);

    // Global API error listener: add toast on error events
    useEffect(() => {
        const handleApiError = (e) => {
            addToast(e.detail.message, { type: e.detail.type });
        };

        window.addEventListener("apiError", handleApiError);
        return () => window.removeEventListener("apiError", handleApiError);
    }, [addToast]);

    const contextValue = { addToast, removeToast, updateToast, removeAllToasts, toasts };

    // Determine the portal target (defaults to document.body).
    const portalTarget =
        typeof window !== "undefined" && portalTargetSelector
            ? document.querySelector(portalTargetSelector)
            : typeof window !== "undefined"
                ? document.body
                : null;

    return (
        <ToastContext.Provider value={contextValue}>
            {children}
            {mounted && portalTarget &&
                createPortal(
                    <ToastContainer
                        toasts={toasts}
                        removeToast={removeToast}
                        autoDismiss={autoDismiss}
                        autoDismissTimeout={autoDismissTimeout}
                        placement={placement}
                        transitionDuration={transitionDuration}
                    />,
                    portalTarget
                )}
        </ToastContext.Provider>
    );
}

export function useToast() {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error("useToast must be used within a ToastProvider");
    }
    return context;
}

// Mapping placement names to fixed style objects.
const POSITION_STYLES = {
    "top-right": { top: "1rem", right: "1rem" },
    "top-left": { top: "1rem", left: "1rem" },
    "bottom-right": { bottom: "1rem", right: "1rem" },
    "bottom-left": { bottom: "1rem", left: "1rem" },
};

// ToastContainer renders a group of toasts with transitions.
const ToastContainer = ({
    toasts,
    removeToast,
    autoDismiss,
    autoDismissTimeout,
    placement,
    transitionDuration,
}) => {
    const containerStyle = {
        position: "fixed",
        zIndex: 10000,
        ...POSITION_STYLES[placement],
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        pointerEvents: "none",
        gap: "0.5rem",
    };

    return (
        <div style={containerStyle}>
            {toasts.map((toast) => (
                <ToastWrapper
                    key={toast.id}
                    toast={toast}
                    autoDismiss={autoDismiss}
                    autoDismissTimeout={autoDismissTimeout}
                    transitionDuration={transitionDuration}
                />
            ))}
        </div>
    );
};

const ToastWrapper = ({ toast, autoDismiss, autoDismissTimeout, transitionDuration }) => {
    const { removeToast } = useToast();
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (autoDismiss && !isHovered) {
            const timer = setTimeout(() => {
                removeToast(toast.id);
            }, autoDismissTimeout);
            return () => clearTimeout(timer);
        }
    }, [autoDismiss, autoDismissTimeout, removeToast, toast.id, isHovered]);

    return (
        <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <Toast {...toast} transitionDuration={transitionDuration} className="mb-2" onClose={() => removeToast(toast.id)}>
                {toast.content}
            </Toast>
        </div>
    );
};

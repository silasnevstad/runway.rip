"use client";

import { useToast } from '@/contexts/ToastProvider';
import Button from "@/components/atoms/Button";

export default function ToastDemo() {
    const { addToast } = useToast();

    const handleSuccess = () => {
        addToast("This is a success notification!", {
            severity: "success", // "info", "success", "warning", "error"
            variant: "soft",     // "soft" or "solid"
            closable: true,      // Include a close button
            slideFrom: "right",  // Determines slide-in direction
        });
    };

    const handleError = () => {
        addToast("This is an error notification!", {
            severity: "error",   // "info", "success", "warning", "error"
            variant: "soft",    // "soft" or "solid"
            closable: true,      // Include a close button
            slideFrom: "right",   // Determines slide-in direction
        });
    };

    const handleInfo = () => {
        addToast("This is an informational message!", {
            severity: "info",    // "info", "success", "warning", "error"
            variant: "soft",     // "soft" or "solid"
            closable: true,      // Include a close button
            slideFrom: "right",    // Determines slide-in direction
        });
    };

    const handleWarning = () => {
        addToast("This is a warning message!", {
            severity: "warning", // "info", "success", "warning", "error"
            variant: "soft",    // "soft" or "solid"
            closable: true,      // Include a close button
            slideFrom: "right", // Determines slide-in direction
        });
    };

    return (
        <div className="flex flex-col gap-4">
            <Button onClick={handleSuccess} color="green">Show Success Toast</Button>
            <Button onClick={handleError} color="red">Show Error Toast</Button>
            <Button onClick={handleInfo} color="blue">Show Info Toast</Button>
            <Button onClick={handleWarning} color="orange">Show Warning Toast</Button>
        </div>
    );
};
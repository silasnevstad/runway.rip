"use client";
import React, { useState, useEffect } from "react";
import { mergeClasses } from "@/utils/styling";

/**
 * A fully customizable, production-ready Slider component with:
 * - **Collapsible** behavior (shrinks until hovered)
 * - **Customizable shape** (via `trackBorderRadius` & `thumbBorderRadius`)
 * - **Glow** effect around the thumb
 * - **Custom bar heights** for active and inactive segments
 * - **Configurable colors** for track and thumb
 * - **Badge** or text above the thumb (e.g., "Up to 1M events")
 * - **Optional side labels** for min and max
 * - **Value position** (above, below, left, right)
 * - Works with standard HTML range props (`min`, `max`, `step`, etc.)
 *
 * **Example:**
 * ```jsx
 * <Slider
 *   min={0}
 *   max={100}
 *   defaultValue={50}
 *   collapsible
 *   glow
 *   badge="Up to 1M events"
 *   trackBorderRadius="full"
 *   thumbBorderRadius="full"
 *   trackColor="gray"
 *   thumbColor="primary"
 *   inactiveBarHeight={8}
 *   activeBarHeight={8}
 *   showLabels
 *   onChange={(val) => console.log("New slider value:", val)}
 * />
 * ```
 */
export default function Slider({
                                   /* Range props */
                                   min = 0,
                                   max = 100,
                                   step = 1,
                                   defaultValue = 50,

                                   /* Layout & display */
                                   valuePosition = "top",     // "top" | "bottom" | "left" | "right"
                                   showValue = true,          // if true, show numeric value near slider
                                   showLabels = true,         // if true, show numeric min/max labels at sides
                                   showSides = true,          // toggles the min & max labels

                                   /* Visual configuration */
                                   collapsible = false,       // if true, slider scales up on hover
                                   collapsedScale = 0.8,      // how much to scale down when not hovered
                                   trackColor = "gray",       // tailwind color key for track
                                   thumbColor = "primary",    // tailwind color key for thumb
                                   trackBorderRadius = "full",
                                   thumbBorderRadius = "full",
                                   inactiveBarHeight = 6,
                                   activeBarHeight = 6,
                                   glow = false,              // if true, adds a glow effect around the thumb

                                   /* Badge above thumb */
                                   badge = "",                // e.g. "Up to 1M events"
                                   showBadge = false,

                                   /* Event handling */
                                   onChange,
                                   /* Additional classes */
                                   className = "",
                                   ...props
                               }) {
    const [value, setValue] = useState(defaultValue);

    useEffect(() => {
        setValue(defaultValue);
    }, [defaultValue]);

    const handleChange = (e) => {
        const newValue = Number(e.target.value);
        setValue(newValue);
        onChange?.(newValue);
    };

    // Calculate progress percentage
    const percentage = ((value - min) / (max - min)) * 100 || 0;

    // Collapsible container classes
    const collapsibleClasses = collapsible
        ? mergeClasses(
            "group transition-all origin-center",
            `scale-${collapsedScale * 100}`, // e.g. scale-80 for collapsedScale=0.8
            "hover:scale-100"
        )
        : "";

    // Container for the entire slider
    const outerContainerClasses = mergeClasses(
        "flex flex-col w-full gap-2",
        collapsibleClasses,
        className
    );

    // We place the slider in a small subcomponent for clarity
    function renderSlider() {
        return (
            <div className="flex items-center w-full gap-2">
                {showSides && showLabels && (
                    <span className="text-sm text-gray-600 dark:text-gray-400 opacity-50 min-w-[28px]">
            {min}
          </span>
                )}

                {/* Track container (relative for badge positioning) */}
                <div className="relative flex-1">
                    {/* Inactive track */}
                    <div
                        className={mergeClasses(
                            "bg-gray-200 dark:bg-gray-700",
                            `rounded-${trackBorderRadius}`
                        )}
                        style={{
                            width: "100%",
                            height: inactiveBarHeight,
                        }}
                    />

                    {/* Active portion */}
                    <div
                        className={mergeClasses(
                            `bg-${trackColor}-500 dark:bg-${trackColor}-400`,
                            `rounded-${trackBorderRadius}`
                        )}
                        style={{
                            width: `${percentage}%`,
                            height: activeBarHeight,
                            position: "absolute",
                            top: "50%",
                            left: 0,
                            transform: "translateY(-50%)",
                        }}
                    />

                    {/* Range input on top: invisible but controls the thumb */}
                    <input
                        type="range"
                        min={min}
                        max={max}
                        step={step}
                        value={value}
                        onChange={handleChange}
                        className={mergeClasses(
                            "absolute top-0 left-0 w-full h-full cursor-pointer opacity-0",
                            // Customize the thumb via webkit, moz, ms pseudo-classes
                            // Glow & border radius are toggled with tailwind styling
                            "[&::-webkit-slider-thumb]:appearance-none",
                            `[&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6`,
                            `[&::-webkit-slider-thumb]:-mt-1 [&::-webkit-slider-thumb]:-ml-3`, // center the thumb
                            `[${
                                glow
                                    ? "&::-webkit-slider-thumb:shadow-lg [&::-webkit-slider-thumb]:shadow-current"
                                    : ""
                            }]`,
                            `[${
                                glow
                                    ? `&::-webkit-slider-thumb:shadow-${thumbColor}-500/60`
                                    : ""
                            }]`,
                            `[&::-webkit-slider-thumb]:bg-${thumbColor}-500`,
                            `[&::-webkit-slider-thumb]:rounded-${thumbBorderRadius}`,
                            "[&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6",
                            `[&::-moz-range-thumb]:bg-${thumbColor}-500`,
                            `[&::-moz-range-thumb]:rounded-${thumbBorderRadius}`,
                            "[&::-ms-thumb]:w-6 [&::-ms-thumb]:h-6",
                            `[&::-ms-thumb]:bg-${thumbColor}-500`,
                            `[&::-ms-thumb]:rounded-${thumbBorderRadius}`
                        )}
                        {...props}
                    />

                    {/* Badge above the thumb, if needed */}
                    {showBadge && badge && (
                        <div
                            className="absolute whitespace-nowrap -translate-x-1/2 -top-8 text-sm px-2 py-1 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded-md shadow"
                            style={{
                                left: `${percentage}%`,
                            }}
                        >
                            {badge}
                        </div>
                    )}
                </div>

                {showSides && showLabels && (
                    <span className="text-sm text-gray-600 dark:text-gray-400 opacity-50 min-w-[28px]">
            {max}+
          </span>
                )}
            </div>
        );
    }

    // Renders the numeric value, if `showValue` is true
    function renderValue() {
        if (!showValue) return null;
        return (
            <div className="text-gray-800 dark:text-gray-200 text-center text-sm font-medium">
                {value}
            </div>
        );
    }

    return (
        <div className={outerContainerClasses}>
            {valuePosition === "top" && renderValue()}

            {/* LEFT */}
            {valuePosition === "left" && (
                <div className="flex items-center gap-2">
                    {renderValue()}
                    {renderSlider()}
                </div>
            )}

            {/* DEFAULT (center) */}
            {valuePosition !== "left" && valuePosition !== "right" && valuePosition !== "top" && valuePosition !== "bottom" && renderSlider()}

            {/* RIGHT */}
            {valuePosition === "right" && (
                <div className="flex items-center gap-2">
                    {renderSlider()}
                    {renderValue()}
                </div>
            )}

            {/* BOTTOM */}
            {valuePosition === "bottom" && renderValue()}
        </div>
    );
}

const fs = require("fs");

const colorTones = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
const colors = ["bg", "primary", "gray", "red", "yellow", "orange", "green", "blue", "purple", "pink"];
const opacities = [0, 5, 10, 15, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 95, 100];
const gradients = ["from", "to"];
const borderRadius = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "full"];

const widths = [0.5, 1, 2, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96];
const margins = [0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96];
const topPositions = [250, 300, 350, 400, 450, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300];

const measurements = [
    "w-full",
    "h-full",
    ...widths.map((width) => `w-${width}`),
    ...widths.map((width) => `h-${width}`),
    ...margins.map((width) => `mx-${width}`),
    ...margins.map((width) => `my-${width}`),
    ...margins.map((width) => `mt-${width}`),
    ...margins.map((width) => `mr-${width}`),
    ...margins.map((width) => `mb-${width}`),
    ...margins.map((width) => `ml-${width}`),
    ...margins.map((width) => `px-${width}`),
    ...margins.map((width) => `py-${width}`),
    ...margins.map((width) => `pt-${width}`),
    ...margins.map((width) => `pr-${width}`),
    ...margins.map((width) => `pb-${width}`),
    ...margins.map((width) => `pl-${width}`),
];

const topPositionsClasses = topPositions.map((top) => `top-${top}`);

const safelist = [
    ...colors.map((color) => colorTones.map((tone) => `bg-${color}-${tone}`)).flat(),  // bg-color-tone
    ...colors.map((color) => colorTones.map((tone) => `text-${color}-${tone}`)).flat(),  // text-color-tone
    ...colors.map((color) => colorTones.map((tone) => `border-${color}-${tone}`)).flat(),  // border-color-tone

    ...opacities  // bg-color-tone/opacity
        .map((opacity) =>
            colors
                .map((color) =>
                    colorTones.map((tone) => `bg-${color}-${tone}/${opacity}`)
                )
                .flat()
        )
        .flat(),
    ...opacities // text-color-tone/opacity
        .map((opacity) =>
            colors
                .map((color) =>
                    colorTones.map((tone) => `text-${color}-${tone}/${opacity}`)
                )
                .flat()
        )
        .flat(),
    ...opacities // border-color-tone/opacity
        .map((opacity) =>
            colors
                .map((color) =>
                    colorTones.map((tone) => `border-${color}-${tone}/${opacity}`)
                )
                .flat()
        )
        .flat(),

    ...gradients // gradient-color-tone
        .map((gradient) =>
            colors
                .map((color) =>
                    colorTones.map((tone) => `${gradient}-${color}-${tone}`)
                )
                .flat()
        )
        .flat(),
    ...gradients // gradient-color-tone/opacity
        .map((gradient) =>
            opacities
                .map((opacity) =>
                    colors
                        .map((color) =>
                            colorTones.map((tone) => `${gradient}-${color}-${tone}/${opacity}`)
                        )
                        .flat()
                )
                .flat()
        )
        .flat(),
];

const borderRadiusClasses = [
    ...borderRadius,
    ...borderRadius.map((radius) => `rounded-t-${radius}`),
    ...borderRadius.map((radius) => `rounded-r-${radius}`),
    ...borderRadius.map((radius) => `rounded-b-${radius}`),
    ...borderRadius.map((radius) => `rounded-l-${radius}`),
    ...borderRadius.map((radius) => `rounded-tr-${radius}`),
    ...borderRadius.map((radius) => `rounded-tl-${radius}`),
    ...borderRadius.map((radius) => `rounded-br-${radius}`),
    ...borderRadius.map((radius) => `rounded-bl-${radius}`),
];

const darkSafeList = safelist.map((className) => `dark:${className}`);

const hoverSafeList = safelist.map((className) => `hover:${className}`);
const darkHoverSafeList = hoverSafeList.map((className) => `dark:${className}`);

const allSafelist = [
    ...safelist,
    ...darkSafeList,
    ...hoverSafeList,
    ...darkHoverSafeList,
    ...measurements,
    ...topPositionsClasses,
    ...borderRadiusClasses
];

fs.writeFileSync("safelist.txt", allSafelist.join("\n"));
console.log("safelist.txt has been generated successfully.");
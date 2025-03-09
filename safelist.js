// TO dynamically use Tailwind CSS (i.e. `text-${color}-500`), that class must be in a safelist.
// Runway avoids this by using styling.js, however, if you want to create your own components
// you can use this  script to generate a safelist of all the classes you might need.
// Also add `@source "safelist.txt";` to your `globals.css` file.

const fs = require("fs");

const colorTones = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
const colors = ["bg", "primary", "gray", "red", "yellow", "orange", "green", "blue", "purple", "pink"];
const opacities = [0, 5, 10, 15, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 95, 100];
const gradients = ["from", "to"];
const borderRadius = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "full"];

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

    // focus-within:border-color-tone
    // focus-within:border-color-tone/opacity
    // focus-within:ring-color-tone/opacity
    ...colors
        .map((color) =>
            colorTones.map((tone) => [
                `focus-within:border-${color}-${tone}`,
                `focus-within:ring-${color}-${tone}`,
                ...opacities.map((opacity) => [
                    `focus-within:border-${color}-${tone}/${opacity}`,
                    `focus-within:ring-${color}-${tone}/${opacity}`,
                ]),
            ]).flat()
        ).flat()
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
    ...borderRadiusClasses
];

fs.writeFileSync("safelist.txt", allSafelist.join("\n"));

console.log("safelist.txt has been generated successfully.");
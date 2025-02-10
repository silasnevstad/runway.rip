const fs = require("fs");

const colorTones = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
const colors = ["bg", "primary", "gray", "red", "yellow", "orange", "green", "blue", "purple"];
const opacities = [0, 5, 10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 95, 100];

const widths = [0.5, 1, 2, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96];

const measurements = [
    "w-full",
    "h-full",
    ...widths.map((width) => `w-${width}`),
    ...widths.map((width) => `h-${width}`),
];

const safelist = [
    ...colors.map((color) => colorTones.map((tone) => `bg-${color}-${tone}`)).flat(),
    ...colors.map((color) => colorTones.map((tone) => `text-${color}-${tone}`)).flat(),
    ...colors.map((color) => colorTones.map((tone) => `border-${color}-${tone}`)).flat(),

    ...opacities
        .map((opacity) =>
            colors
                .map((color) =>
                    colorTones.map((tone) => `bg-${color}-${tone}/${opacity}`)
                )
                .flat()
        )
        .flat(),
    ...opacities
        .map((opacity) =>
            colors
                .map((color) =>
                    colorTones.map((tone) => `text-${color}-${tone}/${opacity}`)
                )
                .flat()
        )
        .flat(),
    ...opacities
        .map((opacity) =>
            colors
                .map((color) =>
                    colorTones.map((tone) => `border-${color}-${tone}/${opacity}`)
                )
                .flat()
        )
        .flat(),
];

const darkSafeList = safelist.map((className) => `dark:${className}`);

const allSafelist = [...safelist, ...darkSafeList, ...measurements];

fs.writeFileSync("safelist.txt", allSafelist.join("\n"));
console.log("safelist.txt has been generated successfully.");
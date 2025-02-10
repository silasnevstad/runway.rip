const fs = require("fs");

const colorTones = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
const colors = ["bg", "primary", "gray", "red", "yellow", "orange", "green", "blue", "purple"];
const opacities = [0, 5, 10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 95, 100];

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

const allSafelist = [...safelist, ...darkSafeList];

fs.writeFileSync("safelist.txt", allSafelist.join("\n"));
console.log("safelist.txt has been generated successfully.");
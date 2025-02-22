
export function getHoverClasses({ background, lift, scale, active, transitionAll = true }) {
    const hoverClasses = [];

    if (transitionAll) {
        // If you want transitions for everything, you can unify them:
        hoverClasses.push("transition-all duration-200 ease-in-out");
    }
    if (lift) {
        hoverClasses.push("hover:-translate-y-0.5");
    }
    if (scale) {
        hoverClasses.push("hover:scale-103");
    }
    if (active) {
        hoverClasses.push("active:scale-97");
    }
    if (background) {
        hoverClasses.push(`hover:bg-${background}`);
    }

    return hoverClasses.join(" ");
}

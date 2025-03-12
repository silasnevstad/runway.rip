import {COLOR_VARIANTS, mergeClasses, WIDTH_SIZES, HEIGHT_SIZES, getBgColorClass} from "@/utils/styling";

const Divider = ({
    color = "gray",
    text = "",
    opacity = 30,
    margin = 10, // in px
    width = 0.5,
    vertical = false,
    noWrap = true,
    className = "",
    ...props
}) => {
    const baseStyle = vertical
        ? `${WIDTH_SIZES[width]} h-full`
        : `w-full ${HEIGHT_SIZES[width]}`;

    const dividerClass = mergeClasses(
        baseStyle,
        getBgColorClass(color),
        className
    );

    const outerContainerClass = mergeClasses(
        `flex ${vertical ? 'h-full' : 'w-full'} items-center`,
    );

    const dividerStyle = {
        margin: vertical ? `0 ${margin}px` : `${margin}px 0`,
        opacity: opacity / 100,
    }

    return (
        text ? (
            <div className={outerContainerClass} {...props} aria-label={text}>
                <div className={dividerClass} style={dividerStyle}></div>
                <p
                    className={`text-gray-600 dark:text-gray-400 px-5 ${noWrap && 'whitespace-nowrap'}`}
                    style={{ opacity: opacity * 1.8 / 100 }}
                >
                    {text}
                </p>
                <div className={dividerClass} style={dividerStyle}></div>
            </div>
        ) : (
            <div className={dividerClass} style={dividerStyle} {...props}></div>
        )
    );
};

export default Divider;
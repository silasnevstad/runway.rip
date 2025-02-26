import { COLOR_VARIANTS, mergeClasses, WIDTH_SIZES, HEIGHT_SIZES } from "@/utils/styling";

const Divider = ({
    color = 'gray',
    variant = 'solid',
    text = '',
    opacity = 30,
    margin = 10, // in px
    width = 0.5,
    vertical = false,
    noWrap = true,
    className = '',
    ...props
}) => {
    const colorSet = COLOR_VARIANTS[color][variant] || COLOR_VARIANTS.gray.solid;

    const baseStyle = !vertical
        ? `w-full ${HEIGHT_SIZES[width]}`
        : `${WIDTH_SIZES[width]} h-full`;

    const dividerClass = mergeClasses(
        baseStyle,
        colorSet.bg,
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
                <p className={`text-gray-600 dark:text-gray-400 px-5 ${noWrap && 'whitespace-nowrap'}`}>{text}</p>
                <div className={dividerClass} style={dividerStyle}></div>
            </div>
        ) : (
            <div className={dividerClass} {...props} style={dividerStyle}></div>
        )
    );
};

export default Divider;
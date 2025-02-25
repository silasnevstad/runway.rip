import {COLOR_VARIANTS, mergeClasses, MX_MARGIN_SIZES, MY_MARGIN_SIZES} from "@/utils/styling";

const Divider = ({
    color = 'gray',
    variant = 'solid',
    text = '',
    opacity = 30,
    margin = 2,
    width = 0.5,
    height = 'full',
    vertical = false,
    noWrap = true,
    className = '',
    ...props
}) => {
    const colorSet = COLOR_VARIANTS[color][variant] || COLOR_VARIANTS.gray.solid;

    const baseStyle = !vertical
        ? `w-${height} h-${width}`
        : `w-${width} h-${height}`;

    const dividerClass = mergeClasses(
        baseStyle,
        colorSet.bg,
        `opacity-${opacity}`,
        vertical ? MX_MARGIN_SIZES[margin] : MY_MARGIN_SIZES[margin],
        className
    );

    const outerContainerClass = mergeClasses(
        `flex ${vertical ? 'h-full' : 'w-full'} items-center`,
        vertical ? MX_MARGIN_SIZES[margin] : MY_MARGIN_SIZES[margin],
    );

    return (
        text ? (
            <div className={outerContainerClass} {...props} aria-label={text}>
                <div className={dividerClass}></div>
                <p className={`text-gray-600 dark:text-gray-400 px-5 ${noWrap && 'whitespace-nowrap'}`}>{text}</p>
                <div className={dividerClass}></div>
            </div>
        ) : (
            <div className={dividerClass} {...props}></div>
        )
    );
};

export default Divider;
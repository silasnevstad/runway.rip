const Divider = ({
    orientation = 'horizontal',
    text = '',
    className = '',
    style = {}
}) => {
    const baseStyle = orientation === 'horizontal'
        ? 'w-full h-0.5'
        : 'w-0.5 h-full';

    const dividerClass = `bg-gray-200 dark:bg-gray-500 opacity-70 ${baseStyle} ${className}`;

    return (
        text ? (
            <div className="flex items-center gap-4 m-6" style={style}>
                <div className={dividerClass}></div>
                <p className="text-gray-600 dark:text-gray-400">{text}</p>
                <div className={dividerClass}></div>
            </div>
        ) : (
            <div className={dividerClass} style={style}></div>
        )
    );
};

export default Divider;
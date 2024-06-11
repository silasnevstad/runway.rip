const Badge = ({
    className = '',
    children,
    shape = 'pill', // pill, square or circle
    border = false,
}) => {
    const baseStyles = `inline-flex justify-center items-center text-center gap-1 font-medium ${shape === 'circle' ? 'w-8 h-8' : 'py-1 px-2'} `;
    const colorStyles = className.includes('bg-') ? ' ' : 'bg-primary-100 text-primary-800 ';
    const shapeStyles = shape === 'pill' || shape === "circle" ? 'rounded-full ' : 'rounded-lg ';
    const borderStyles = border ? className.includes('border-') ? 'border ' : `border border-primary-800 ` : ' ';

    return (
        <div className={baseStyles + colorStyles + shapeStyles + borderStyles + className}>
            {children}
        </div>
    );
};

export default Badge;
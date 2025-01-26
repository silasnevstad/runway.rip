const InlineHighlight = ({ children, type = 'default' }) => {
    const styles = {
        default: 'bg-gray-200 text-gray-800',
        button: 'bg-primary-500/30 text-white font-semibold',
        navigation: 'bg-green-500/30 text-white italic',
        // Add more types as needed
    };

    return (
        <code className={`rounded px-1 py-0.5 ${styles[type] || styles.default}`}>
            {children}
        </code>
    );
};

export default InlineHighlight;
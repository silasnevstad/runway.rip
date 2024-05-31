const Divider = () => <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-500 opacity-70"></div>;

const VerticalDivider = () => <div className="w-0.5 h-full bg-gray-200 dark:bg-gray-700"></div>;

const DividerWithText = ({ text }) => (
    <div className="flex items-center gap-4 m-6">
        <Divider/>
        <p className="text-gray-600 dark:text-gray-400">{text}</p>
        <Divider/>
    </div>
);

export { Divider, VerticalDivider, DividerWithText };
import { IoCheckmarkSharp, IoCloseSharp } from "react-icons/io5";

import Card from "@/components/atoms/Card";
import { landingConfig, withWithoutsConfig } from "@/config";

export default function WithWithout({
    title = landingConfig.withWithouts.title,
    withoutTitle = landingConfig.withWithouts.withoutTitle,
    withTitle = landingConfig.withWithouts.withTitle,
    withouts = withWithoutsConfig.withouts,
    withs = withWithoutsConfig.withs,
    cardBorderRadius = "lg",
    cardBorder = false,
}) {
    return (
        <section
            id="with-without"
            className="flex flex-col items-center w-full sm:w-5/6 lg:w-5/6 max-w-7xl px-6 sm:px-4"
        >
            {title && (
                <p className="max-w-4xl text-4xl font-black text-gray-800 dark:text-gray-100 text-center mb-15 px-4">
                    {title}
                </p>
            )}
            <div className="flex flex-col lg:flex-row gap-10 w-full max-w-6xl">
                <Card
                    className="flex-1 pb-4"
                    padding={30}
                    color="red"
                    variant="soft"
                    borderRadius={cardBorderRadius}
                    border={cardBorder}
                    shadow
                >
                    <h3 className="flex-1 text-xl font-semibold mb-6 text-red-500 dark:text-red-400">
                        {withoutTitle}
                    </h3>
                    <div className="flex flex-col gap-1">
                        {withouts.map((item, index) => (
                            <div key={index} className="flex items-start">
                                <IoCloseSharp className="inline-block text-red-500 dark:text-red-400 mr-2 mt-1 w-4 h-4" />
                                <p className="text-red-500 dark:text-red-400 flex-1">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>
                </Card>
                <Card
                    className="flex-1 pb-4"
                    padding={30}
                    color="green"
                    variant="soft"
                    borderRadius={cardBorderRadius}
                    border={cardBorder}
                    shadow
                >
                    <h3 className="flex-1 text-xl font-semibold mb-6 text-green-600 dark:text-green-600">
                        {withTitle}
                    </h3>
                    <div className="flex flex-col gap-1">
                        {withs.map((item, index) => (
                            <div key={index} className="flex items-start">
                                <IoCheckmarkSharp className="inline-block text-green-600 dark:text-green-300 mr-2 mt-1 w-4 h-4" />
                                <p className="text-green-600 dark:text-green-500 flex-1">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </section>
    );
}
import { IoCheckmarkSharp, IoCloseSharp } from "react-icons/io5";
import Card from "@/components/atoms/Card";

export default function WithWithout({
    title = "Tired of spending hours configuring and maintaining?",
    withoutTitle = "Launching without Runway",
    withTitle = "Launching with Runway",
    withouts = [
        "No more endless configuration files",
        "No more complex build processes",
        "No more worrying about security vulnerabilities",
    ],
    withs = [
        "Spend less time configuring and more time building",
        "Focus on your product, not your infrastructure",
        "Get back to what you love: building great software",
    ],
    cardBorderRadius = "lg",
    cardBorder = false,
}) {
    return (
        <section
            id="with-without"
            className="flex flex-col items-center w-full"
        >
            <p className="max-w-4xl text-4xl font-black text-gray-800 dark:text-gray-100 text-center mb-15">
                {title}
            </p>
            <div className="flex flex-col lg:flex-row gap-10 w-full max-w-6xl max-xl:w-4/6 max-lg:w-4/6 max-sm:w-5/6">
                <Card
                    className="flex-1"
                    padding={30}
                    color="red"
                    variant="soft"
                    borderRadius={cardBorderRadius}
                    border={cardBorder}
                    shadow
                >
                    <h3 className="text-xl font-semibold mb-6 text-red-500">{withoutTitle}</h3>
                    <div className="flex flex-col gap-1">
                        {withouts.map((item, index) => (
                            <div key={index} className="flex items-start">
                                <IoCloseSharp className="inline-block text-red-400 mr-2 mt-1 w-4 h-4" />
                                <p className="text-red-500 flex-1">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>
                </Card>
                <Card
                    className="flex-1"
                    padding={30}
                    color="green"
                    variant="soft"
                    borderRadius={cardBorderRadius}
                    border={cardBorder}
                    shadow
                >
                    <h3 className="text-xl font-semibold mb-6 text-green-500">{withTitle}</h3>
                    <div className="flex flex-col gap-1">
                        {withs.map((item, index) => (
                            <div key={index} className="flex items-start">
                                <IoCheckmarkSharp className="inline-block text-green-300 mr-2 mt-1 w-4 h-4" />
                                <p className="text-green-500 flex-1">
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
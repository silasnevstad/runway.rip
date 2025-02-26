import { IoCheckmarkSharp, IoCloseSharp } from "react-icons/io5";
import Card from "@/components/atoms/Card";


export default function WithWithout({
    title = "Tired of spending hours configuring and maintaining?",
    withoutTitle = "Without Runway",
    withTitle = "With Runway",
    withouts = [
        "Manually configure authentication",
        "Spend hours creating components",
        "Read through endless documentation",
        "Setup payments and subscriptions",
        "Manage your own database",
        "Spend hours on SEO",
        "Setup email sending",
        "Spend hours creating landing pages",
    ],
    withs = [
        "Authentication already configured",
        "Payments and subscriptions ready to go",
        "50+ components ready to use",
        "Database already setup",
        "SEO optimized",
        "Email setup",
        "Landing page ready",
        "Login and signup pages ready",
    ],
    cardBorderRadius = "lg",
    cardBorder = false,
}) {
    return (
        <section
            id="with-without"
            className="flex flex-col items-center w-full"
        >
            {title && (
                <p className="max-w-4xl text-4xl font-black text-gray-800 dark:text-gray-100 text-center mb-15">
                    {title}
                </p>
            )}
            <div className="flex flex-col lg:flex-row gap-10 w-full max-w-6xl max-xl:w-4/6 max-lg:w-4/6 max-sm:w-5/6">
                <Card
                    className="flex-1 pb-4"
                    padding={30}
                    color="red"
                    variant="soft"
                    borderRadius={cardBorderRadius}
                    border={cardBorder}
                    shadow
                >
                    <h3 className="flex-1 text-xl font-semibold mb-6 text-red-500 dark:text-red-400">{withoutTitle}</h3>
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
                    <h3 className="flex-1 text-xl font-semibold mb-6 text-green-600 dark:text-green-600">{withTitle}</h3>
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
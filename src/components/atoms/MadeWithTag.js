import Link from 'next/link';
import {mergeClasses} from "@/utils/styling";
import Image from "next/image";

const Stripe = (style) => {
    switch (style) {
        case 'vertical':
            return <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full border-l-4 border-dashed border-primary-500 opacity-20 dark:border-gray-600 z-0"></div>
        case 'horizontal':
            return <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full border-t-4 border-dashed border-primary-500 opacity-20 dark:border-gray-600 z-0"></div>
        case 'track':
            return <>
                <div className="absolute top-0 left-0 w-full border-t-4 border-dashed border-primary-500 opacity-20 dark:border-gray-600 z-0"></div>
                <div className="absolute bottom-0 left-0 w-full border-b-4 border-dashed border-primary-500 opacity-20 dark:border-gray-600 z-0"></div>
            </>
        default:
            return <div
                className="absolute top-1 left-0 w-full border-t-4 border-dashed border-primary-500 opacity-20 dark:border-gray-600 z-0"></div>
    }
}

const MadeWithTag = ({
    style = "vertical",
    className = "",
}) => {
    const finalClasses = mergeClasses(
        `relative flex justify-center items-center`,
        `px-2.5 py-1.5 rounded-lg dark:bg-bg-900`,
        `border border-gray-300 dark:border-gray-800`,
        `hover:scale-103 transition-transform duration-200 ease-in-out cursor-pointer`,
        className
    );

    return (
        <Link href="https://runway.rip" className={finalClasses}>
            <span className="z-10 mr-1 opacity-50 text-sm font-medium">Built with</span>
            <p className="z-10 text-primary-500 font-semibold">Runway</p>
            {Stripe(style)}
        </Link>
    )
}

export default MadeWithTag
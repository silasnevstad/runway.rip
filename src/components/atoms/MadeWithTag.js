import Link from 'next/link';

const MadeWithTag = () => {
    return (
        <Link href="https://silasn.com" className="relative flex justify-center items-center px-2.5 py-1.5 dark:bg-bg-900 rounded-lg border border-gray-300 dark:border-gray-800
            hover:scale-103 transition-transform duration-200 ease-in-out cursor-pointer">
            <span className="z-10 mr-1 opacity-50 text-sm font-medium">Built with</span>
            <p className="z-10 text-primary-500 font-semibold">Runway</p>
            {/*<div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full border-t-4 border-dashed border-primary-500 opacity-20 dark:border-gray-600 z-0"></div>*/}
            <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full border-l-4 border-dashed border-primary-500 opacity-20 dark:border-gray-600 z-0"></div>
        </Link>
    )
}

export default MadeWithTag
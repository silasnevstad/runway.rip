import Image from "next/image";
import Link from "next/link";
import Divider from "@/components/atoms/Divider";
import Code from "@/app/(noauth)/docs/components/Code";
import PreviewCode from "@/app/(noauth)/docs/components/PreviewCode";
import { InformationCircleIcon, ExclamationCircleIcon, ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export function useMDXComponents(components) {
    return {
        h1: ({ children }) => <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>,
        h2: ({ children }) => <h2 className="text-3xl font-semibold mt-6 mb-3">{children}</h2>,
        h3: ({ children }) => <h3 className="text-2xl font-medium mt-8 mb-2">{children}</h3>,
        p: ({ children }) => <p className="my-2 leading-relaxed">{children}</p>,
        ul: ({ children }) => <ul className="list-disc list-inside my-4">{children}</ul>,
        ol: ({ children }) => <ol className="list-decimal list-inside my-4">{children}</ol>,
        li: ({ children }) => <li className="my-1">{children}</li>,
        Required: ({ children }) => (
            <div className="bg-yellow-500/20 rounded-lg border border-yellow-500 p-4 my-4">
                <p className="flex items-center text-sm text-yellow-500 font-semibold">
                    <ExclamationCircleIcon className="w-5 h-5 inline-block mr-1" />
                    Required
                </p>
                {children}
            </div>
        ),
        Info: ({children}) => (
            <div className="bg-blue-500/20 rounded-lg border border-blue-500 p-4 my-4">
                <p className="flex items-center text-sm text-blue-500 font-semibold">
                    <InformationCircleIcon className="w-5 h-5 inline-block mr-1" />
                    Info
                </p>
                {children}
            </div>
        ),
        Tip: ({children}) => (
            <div className="bg-green-500/20 rounded-lg border border-green-500 p-4 my-4">
                <p className="flex items-center text-sm text-green-500 font-semibold">
                    <ExclamationCircleIcon className="w-5 h-5 inline-block mr-1" />
                    Tip!
                </p>
                {children}
            </div>
        ),
        Warning: ({children}) => (
            <div className="bg-red-500/20 rounded-lg border border-red-500 p-4 my-4">
                <p className="flex items-center text-sm text-red-500 font-semibold">
                    <ExclamationTriangleIcon className="w-5 h-5 inline-block mr-1" />
                    Warning!
                </p>
                {children}
            </div>
        ),
        Divider: Divider,
        a: ({ href, children }) => (
            <Link href={href} className="text-green-500 hover:text-green-700 underline">
                {children}
            </Link>
        ),
        img: (props) => (
            <Image
                className="my-4 rounded-lg"
                {...props}
                width={600}
                height={400}
                layout="responsive"
            />
        ),
        code: Code,
        PreviewCode: PreviewCode,
        pre: ({ children }) => <div className="my-4">{children}</div>,
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
                {children}
            </blockquote>
        ),
        table: ({ children }) => (
            <div className="overflow-x-auto my-10">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800 rounded-lg">
                    {children}
                </table>
            </div>
        ),
        th: ({ children }) => (
            <th className="px-6 py-3 bg-gray-800 dark:bg-gray-900 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase">
                {children}
            </th>
        ),
        td: ({ children }) => (
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200 border-b border-gray-200 dark:border-gray-800">
                {children}
            </td>
        ),
        ...components,
    };
}
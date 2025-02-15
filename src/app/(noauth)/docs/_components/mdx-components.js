import React from 'react';
import Image from "next/image";
import Link from "next/link";
import Divider from "@/components/atoms/Divider";
import Code from "@/app/(noauth)/docs/_components/Code";
import PreviewCode from "@/app/(noauth)/docs/_components/PreviewCode";
import ClientSideToggle from "@/app/(noauth)/docs/_components/ClientSideToggle";
import ClientSideCheckbox from "@/app/(noauth)/docs/_components/ClientSideCheckbox";
import TutorialGuide from "@/app/(noauth)/docs/_components/TutorialGuide";
import InlineHighlight from "@/app/(noauth)/docs/_components/InlineHighlight";
import {
    InformationCircleIcon,
    ExclamationCircleIcon,
    ExclamationTriangleIcon,
    WrenchIcon,
    EnvelopeIcon,
    CheckCircleIcon
} from "@heroicons/react/24/outline";
import TextLink from "@/components/atoms/TextLink";
import Accordion from "@/components/molecules/Accordion";
import Avatar from "@/components/atoms/Avatar";
import CodeBlock from "@/components/atoms/CodeBlock";
import Badge from "@/components/atoms/Badge";
import BadgeDemo from "@/app/(noauth)/docs/_components/demos/BadgeDemo";
import AvatarList from "@/components/molecules/AvatarList";
import Breadcrumb from "@/components/atoms/Breadcrumb";
import { DocsNav } from "@/app/(noauth)/docs/Nav";
import Button from "@/components/atoms/Button";
import { ButtonIconDemo, ButtonOnClickDemo } from "@/app/(noauth)/docs/_components/demos/ButtonDemo";
import Card from "@/components/atoms/Card";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { MdQuestionMark } from "react-icons/md";
import { BiCheck } from "react-icons/bi";
import DropdownText from "@/components/atoms/DropdownText";
import FileDrop from "@/components/atoms/FileDrop";
import FileInput from "@/components/atoms/FileInput";
import Switch from "@/components/atoms/Switch";
import SwitchDemo from "@/app/(noauth)/docs/_components/demos/SwitchDemo";
import {FileDropDemo} from "@/app/(noauth)/docs/_components/demos/FileDropDemo";
import { LuUpload } from "react-icons/lu";
import { LinkIcon } from "@heroicons/react/24/outline";
import Input from "@/components/atoms/Input";
import Loader from "@/components/atoms/Loader";
import LineGraph from "@/components/atoms/LineGraph";
import Slider from "@/components/atoms/Slider";
import {TextLinkIconDemo} from "@/app/(noauth)/docs/_components/demos/TextLinkDemo";
import Tooltip from "@/components/atoms/Tooltip";
import SearchBar from "@/components/molecules/SearchBar";
import ClientSideSearchBar from "@/app/(noauth)/docs/_components/ClientSideSearchBar";
import PasswordAuthForm from "@/components/auth/PasswordAuthForm";
import PasswordlessAuthForm from "@/components/auth/PasswordlessAuthForm";
import OAuthButtons from "@/components/auth/OAuthButtons";

const TypesColorMap = {
    string: 'text-green-500',
    number: 'text-blue-500',
    integer: 'text-blue-500',
    float: 'text-blue-500',
    boolean: 'text-yellow-500',
    array: 'text-red-500',
    ReactNode: 'text-purple-500',
    Function: 'text-purple-500',
    function: 'text-purple-500',
    object: 'text-purple-500',
    Icon: 'text-purple-500',
}

export const mdxComponents = {
    h1: ({ children }) => <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-semibold mt-6 mb-3">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-medium mt-8 mb-2">{children}</h3>,
    p: ({ children }) => <p className="my-2 leading-relaxed">{children}</p>,
    ul: ({ children }) => <ul className="list-disc list-inside my-4">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal list-inside my-4 space-y-6">{children}</ol>,
    li: ({ children }) => <li className="my-1">{children}</li>,
    Success:  ({ children }) => (
        <div className="bg-green-100 border border-green-500 text-green-700 p-3 my-4 rounded-lg">
            <div className="flex items-center mb-2">
                <CheckCircleIcon className="w-5 h-5 mr-2" />
                <strong>Success</strong>
            </div>
            {children}
        </div>
    ),
    ErrorAlert: ({ children }) => (
        <div className="bg-red-100 border border-red-500 text-red-700 p-3 my-4 rounded-lg">
            <div className="flex items-center mb-2">
                <ExclamationCircleIcon className="w-5 h-5 mr-2" />
                <strong>Error</strong>
            </div>
            {children}
        </div>
    ),
    Callout: ({ title, children }) => (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
            {title && <h4 className="font-bold text-yellow-700 mb-2">{title}</h4>}
            <p className="text-yellow-700">{children}</p>
        </div>
    ),
    InfoCallout: ({ title, children }) => (
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
            {title && <h4 className="font-bold text-blue-700 mb-2">{title}</h4>}
            <p className="text-blue-700">{children}</p>
        </div>
    ),
    Required: ({ children }) => (
        <div className="bg-yellow-500/20 rounded-lg border-l-4 rounded-l-none border-yellow-500 p-3 pb-2 my-4">
            <p className="flex items-center text-md text-yellow-500 font-semibold">
                <ExclamationCircleIcon className="w-5 h-5 inline-block mr-1" />
                Required
            </p>
            {children}
        </div>
    ),
    Info: ({children}) => (
        <div className="bg-blue-500/20 rounded-lg border border-blue-500 p-3 pb-2 my-4">
            <p className="flex items-center text-md text-blue-500 font-semibold">
                <InformationCircleIcon className="w-5 h-5 inline-block mr-1" />
                Info
            </p>
            {children}
        </div>
    ),
    Tip: ({children}) => (
        <div className="bg-green-500/20 rounded-lg border-l-4 rounded-l-none border-green-500 p-3 pb-2 my-4">
            <p className="flex items-center text-md text-green-500 font-semibold">
                <ExclamationCircleIcon className="w-5 h-5 inline-block mr-1" />
                Tip
            </p>
            {children}
        </div>
    ),
    Caution: ({children}) => (
        <div className="bg-orange-500/20 rounded-lg border-l-4 rounded-l-none border-orange-500 p-3 pb-2 my-4">
            <p className="flex items-center text-md text-orange-500 font-semibold">
                <ExclamationTriangleIcon className="w-5 h-5 inline-block mr-1 text-orange-500" />
                Caution
            </p>
            {children}
        </div>
    ),
    Warning: ({children}) => (
        <div className="bg-red-500/20 rounded-lg border-l-4 rounded-l-none border-red-500 p-3 pb-2 my-4">
            <p className="flex items-center text-md text-red-500 font-semibold">
                <ExclamationTriangleIcon className="w-5 h-5 inline-block mr-1" />
                Warning
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
    Image: Image,
    InlineHighlight: InlineHighlight,
    code: Code,
    PreviewCode: PreviewCode,
    TutorialGuide: ({ options, children }) => {
        const [firstPage, secondPage] = React.Children.toArray(children);
        return (
            <TutorialGuide
                options={options}
                firstPage={firstPage}
                secondPage={secondPage}
            />
        );
    },
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
        <th className="px-6 py-3 bg-gray-800 dark:bg-bg-700 text-left text-md font-medium text-gray-500 dark:text-gray-200 uppercase">
            {children}
        </th>
    ),
    td: ({ children }) => (
        <td className="px-6 py-4 whitespace-nowrap text-md text-gray-900 dark:text-gray-200 border-b border-gray-200 dark:border-gray-800">
            {/* use colorMap to see if this is a type */}
            {TypesColorMap[children] ? (
                <span className={TypesColorMap[children]}>
                    {children}
                </span>
            ) : children}
        </td>
    ),

    // Components
    Accordion: Accordion,
    Avatar: Avatar,
    AvatarList: AvatarList,
    Badge: Badge,
    BadgeDemo: BadgeDemo,
    Breadcrumb: Breadcrumb,
    Button: Button,
    ButtonIconDemo: ButtonIconDemo,
    ButtonOnClickDemo: ButtonOnClickDemo,
    Card: Card,
    Checkbox: ClientSideCheckbox,
    CodeBlock: CodeBlock,
    DropdownText: DropdownText,
    FileDrop: FileDrop,
    FileDropDemo: FileDropDemo,
    FileInput: FileInput,
    Switch: Switch,
    SwitchDemo: SwitchDemo,
    TextLink: TextLink,
    TextLinkIconDemo: TextLinkIconDemo,
    Toggle: ClientSideToggle,
    Tooltip: Tooltip,
    Input: Input,
    Loader: Loader,
    LineGraph: LineGraph,
    SearchBar: SearchBar,
    ClientSideSearchBar: ClientSideSearchBar,
    Slider: Slider,

    PasswordAuthForm: PasswordAuthForm,
    PasswordlessAuthForm: PasswordlessAuthForm,
    OAuthButtons: OAuthButtons,

    DocsNav: DocsNav,

    // Icons
    WrenchIcon: WrenchIcon,
    EnvelopeIcon: EnvelopeIcon,
    QuestionMarkCircleIcon: QuestionMarkCircleIcon,
    MdQuestionMark: MdQuestionMark,
    BiCheck: BiCheck,
    LuUpload: LuUpload,
    LinkIcon: LinkIcon,
};

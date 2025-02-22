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
import { MdQuestionMark, MdOutlineInfo } from "react-icons/md";
import { BiCheck } from "react-icons/bi";
import {FaBolt, FaExclamation, FaInfo, FaRegLightbulb} from "react-icons/fa6";
import DropdownText from "@/components/atoms/DropdownText";
import FileDrop from "@/components/atoms/FileDrop";
import FileInput from "@/components/atoms/FileInput";
import Switcher from "@/components/atoms/Switcher";
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
import Alert from "@/components/atoms/Alert";
import {StandoutCard, TerminalCard, WebsiteCard} from "@/components/atoms/CustomCards";
import File from "@/components/atoms/File";
import Indicator from "@/components/atoms/Indicator";
import { FaExclamationCircle } from "react-icons/fa";
import {InputIconDemo} from "@/app/(noauth)/docs/_components/demos/InputDemo";
import TextArea from "@/components/atoms/TextArea";
import {TextAreaDemo} from "@/app/(noauth)/docs/_components/demos/TextAreaDemo";

const TypesColorMap = {
    string: 'text-green-500',
    number: 'text-blue-500',
    integer: 'text-blue-500',
    float: 'text-blue-500',
    boolean: 'text-yellow-500',
    array: 'text-purple-500',
    ReactNode: 'text-purple-500',
    Function: 'text-purple-500',
    function: 'text-purple-500',
    object: 'text-purple-500',
    Icon: 'text-purple-500',
}

export const mdxComponents = {
    h1: ({ children }) => <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl xl:text-3xl font-semibold mt-6 mb-3">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl xl:text-2xl font-medium mt-8 mb-2">{children}</h3>,
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
        <div className="flex items-start gap-2 text-[15px] bg-blue-500/20 rounded-lg border-l-4 rounded-l-none border-blue-500 p-2 my-4">
            <FaInfo className="w-6 h-6 text-blue-500 inline-block mt-2" />
            {children}
        </div>
    ),
    Tip: ({children}) => (
        <div className="flex items-start gap-2 text-[15px] bg-green-500/20 rounded-lg border-l-4 rounded-l-none border-green-500 p-2 my-4">
            <FaRegLightbulb className="w-6 h-6 text-green-500 inline-block mt-2" />
            {children}
        </div>
    ),
    Direction: ({children}) => (
        <div className="flex items-start gap-2 text-[15px] bg-yellow-500/20 rounded-lg border-l-4 rounded-l-none border-yellow-500 p-2 my-4">
            <FaBolt className="w-6 h-6 text-yellow-500 inline-block mt-2" />
            {children}
        </div>
    ),
    Caution: ({children}) => (
        <div className="flex items-start gap-2 text-[15px] bg-orange-500/20 rounded-lg border-l-4 rounded-l-none border-orange-500 p-2 my-4">
            <ExclamationTriangleIcon className="w-6 h-6 text-orange-500 inline-block mt-2" />
            {children}
        </div>
    ),
    Warning: ({children}) => (
        <div className="flex items-start gap-2 text-[15px] bg-red-500/20 rounded-lg border-l-4 rounded-l-none border-red-500 p-2 my-4">
            <FaExclamationCircle className="w-8 h-8 text-red-500 inline-block mt-0.5" />
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
    table: ({ children }) => (
        <div className="w-full overflow-x-auto">
            <table className="table-auto w-full border-collapse">
                {children}
            </table>
        </div>
    ),
    th: ({ children }) => (
        <th className="py-3 px-2 text-left text-xs uppercase font-normal text-gray-900 dark:text-gray-200 whitespace-normal">
            {children}
        </th>
    ),
    td: ({ children }) => (
        <td className="py-3 px-2 text-[13px] text-gray-700 dark:text-gray-400
                 border-t border-gray-200 dark:border-gray-800
                 whitespace-normal">
            <span className={`${TypesColorMap[children] || ''}`}>
              {children}
            </span>
        </td>
    ),


    // Components
    Accordion: Accordion,
    Alert: Alert,
    Avatar: Avatar,
    AvatarList: AvatarList,
    Badge: Badge,
    BadgeDemo: BadgeDemo,
    Breadcrumb: Breadcrumb,
    Button: Button,
    ButtonIconDemo: ButtonIconDemo,
    ButtonOnClickDemo: ButtonOnClickDemo,
    Card: Card,
    TerminalCard: TerminalCard,
    WebsiteCard: WebsiteCard,
    StandoutCard: StandoutCard,
    Checkbox: ClientSideCheckbox,
    CodeBlock: CodeBlock,
    DropdownText: DropdownText,
    File: File,
    FileDrop: FileDrop,
    FileDropDemo: FileDropDemo,
    FileInput: FileInput,
    Indicator: Indicator,
    Switch: Switcher,
    SwitchDemo: SwitchDemo,
    TextLink: TextLink,
    TextLinkIconDemo: TextLinkIconDemo,
    Toggle: ClientSideToggle,
    Tooltip: Tooltip,
    Input: Input,
    InputIconDemo: InputIconDemo,
    Loader: Loader,
    LineGraph: LineGraph,
    SearchBar: SearchBar,
    ClientSideSearchBar: ClientSideSearchBar,
    Slider: Slider,
    TextArea: TextArea,
    TextAreaDemo: TextAreaDemo,

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

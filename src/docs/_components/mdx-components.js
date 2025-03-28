import React from 'react';
import Image from "next/image";
import Link from "next/link";
import Divider from "@/components/atoms/Divider";
import Code from "@/docs/_components/Code";
import PreviewCode from "@/docs/_components/PreviewCode";
import ClientSideToggle from "@/docs/_components/ClientSideToggle";
import ClientSideCheckbox from "@/docs/_components/ClientSideCheckbox";
import TutorialGuide from "@/docs/_components/TutorialGuide";
import InlineHighlight from "@/docs/_components/InlineHighlight";
import {
    ExclamationTriangleIcon,
    QuestionMarkCircleIcon,
    WrenchIcon,
    EnvelopeIcon,
    LinkIcon,
    CheckIcon,
    DocumentArrowUpIcon,
    PlusCircleIcon,
    PaperAirplaneIcon
} from "@heroicons/react/24/outline";
import { SparklesIcon, LightBulbIcon, InformationCircleIcon, ExclamationCircleIcon } from "@heroicons/react/24/solid";
import { LuPartyPopper } from "react-icons/lu";

import TextLink from "@/components/atoms/TextLink";
import Accordion from "@/components/molecules/Accordion";
import Avatar from "@/components/atoms/Avatar";
import CodeBlock from "@/components/atoms/CodeBlock";
import Badge from "@/components/atoms/Badge";
import BadgeDemo from "@/docs/_components/demos/BadgeDemo";
import AvatarList from "@/components/molecules/AvatarList";
import Breadcrumb from "@/components/atoms/Breadcrumb";
import { DocsNav } from "@/app/(noauth)/docs/Nav";
import Button from "@/components/atoms/Button";
import { ButtonIconDemo, ButtonOnClickDemo } from "@/docs/_components/demos/ButtonDemo";
import SwitchDemo from "@/docs/_components/demos/SwitchDemo";
import { FileDropDemo } from "@/docs/_components/demos/FileDropDemo";
import { TextLinkIconDemo } from "@/docs/_components/demos/TextLinkDemo";
import Card from "@/components/atoms/Card";
import FileDrop from "@/components/atoms/FileDrop";
import FileInput from "@/components/atoms/FileInput";
import Switcher from "@/components/atoms/Switcher";
import Input from "@/components/atoms/Input";
import Loader from "@/components/atoms/Loader";
import LineGraph from "@/components/atoms/LineGraph";
import Slider from "@/components/atoms/Slider";

import Tooltip from "@/components/atoms/Tooltip";
import SearchBar from "@/components/molecules/SearchBar";
import ClientSideSearchBar from "@/docs/_components/ClientSideSearchBar";
import PasswordAuthForm from "@/components/auth/PasswordAuthForm";
import PasswordlessAuthForm from "@/components/auth/PasswordlessAuthForm";
import OAuthButtons from "@/components/auth/OAuthButtons";
import Alert from "@/components/atoms/Alert";
import { StandoutCard, TerminalCard, WebsiteCard } from "@/components/molecules/CustomCards";
import File from "@/components/atoms/File";
import Indicator from "@/components/atoms/Indicator";
import {InputIconDemo} from "@/docs/_components/demos/InputDemo";
import TextArea from "@/components/atoms/TextArea";
import { TextAreaDemo } from "@/docs/_components/demos/TextAreaDemo";
import StarRating from "@/components/atoms/StarRating";
import Select from "@/components/atoms/Select";
import Modal from "@/components/atoms/Modal";
import ModalDemo from "@/docs/_components/demos/ModalDemo";
import TextHighlight from "@/components/atoms/TextHighlight";
import ThemeSwitcher from "@/components/molecules/ThemeSwitcher";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import Hero from "@/components/landing/Hero";
import AccountCard from "@/components/auth/AccountCard";
import WithWithout from "@/components/landing/WithWithout";
import FeaturesGrid from "@/components/landing/FeaturesGrid";
import FeaturesCarousel from "@/components/landing/FeaturesCarousel";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import PricingCard from "@/components/payments/PricingCard";
import PricingPlans from "@/components/payments/PricingPlans";
import CheckoutButton from "@/components/payments/CheckoutButton";
import AuthInput from "@/components/auth/AuthInput";
// import ToastDemo from "@/docs/_components/demos/ToastDemo";
import Toast from "@/components/atoms/Toast";
import CTA from "@/components/landing/CTA";
import OAuthButton from "@/components/auth/OAuthButton";
import DropdownItem from "@/components/atoms/DropdownItem";
import {FileInputDemo} from "@/docs/_components/demos/FileInputDemo";

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
    ul: ({ children }) => (
        <ul className="list-disc list-inside my-1.5 mb-2 pl-4 [&_ul]:list-[square] [&_ul]:pl-4">
            {children}
        </ul>
    ),
    ol: ({ children }) => <ol className="list-decimal list-inside">{children}</ol>,
    li: ({ children }) => <li className="my-1.5 ">{children}</li>,
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
            <InformationCircleIcon className="w-6 h-6 min-w-6 text-blue-500 inline-block mt-2" />
            <div className="flex flex-col">
                {children}
            </div>
        </div>
    ),
    Tip: ({children}) => (
        <div className="flex items-start gap-2 text-[15px] bg-green-500/20 rounded-lg border-l-4 rounded-l-none border-green-500 p-2 my-4">
            <LightBulbIcon className="w-6 h-6 min-w-6 text-green-500 inline-block mt-2" />
            <div className="flex flex-col">
                {children}
            </div>
        </div>
    ),
    Callout: ({children}) => (
        <div className="flex items-start gap-2 text-[15px] bg-orange-500/20 rounded-lg border-l-4 rounded-l-none border-orange-500 p-2 my-4">
            <SparklesIcon className="w-6 h-6 min-w-6 text-yellow-500 inline-block mt-2" />
            <div className="flex flex-col">
                {children}
            </div>
        </div>
    ),
    Caution: ({children}) => (
        <div className="flex items-start gap-2 text-[15px] bg-orange-500/20 rounded-lg border-l-4 rounded-l-none border-orange-500 p-2 my-4">
            <ExclamationTriangleIcon className="w-6 h-6 min-w-6  text-orange-500 inline-block mt-2" />
            <div className="flex flex-col">
                {children}
            </div>
        </div>
    ),
    Warning: ({children}) => (
        <div className="flex items-start gap-2 text-[15px] bg-red-500/20 rounded-lg border-l-4 rounded-l-none border-red-500 p-2 my-4">
            <ExclamationCircleIcon className="w-6 h-6 min-w-6  text-red-500 inline-block mt-2" />
            {children}
        </div>
    ),
    Divider: Divider,
    a: ({ href, children }) => (
        <Link href={href} className="text-green-600 dark:text-green-600 hover:text-green-700 underline">
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
    TutorialGuide: TutorialGuide,
    table: ({ children }) => (
        <div className="w-full overflow-x-auto">
            <table className="table-auto min-w-full border-collapse">
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

    // Landing
    Header: Header,
    Hero: Hero,
    FeaturesCarousel: FeaturesCarousel,
    FeaturesGrid: FeaturesGrid,
    WithWithout: WithWithout,
    Pricing: Pricing,
    CTA: CTA,
    FAQ: FAQ,
    Footer: Footer,

    // Auth
    AccountCard: AccountCard,
    AuthInput: AuthInput,
    PasswordAuthForm: PasswordAuthForm,
    PasswordlessAuthForm: PasswordlessAuthForm,
    OAuthButtons: OAuthButtons,
    OAuthButton: OAuthButton,

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
    CheckoutButton: CheckoutButton,
    TerminalCard: TerminalCard,
    WebsiteCard: WebsiteCard,
    StandoutCard: StandoutCard,
    Checkbox: ClientSideCheckbox,
    CodeBlock: CodeBlock,
    DropdownItem: DropdownItem,
    File: File,
    FileDrop: FileDrop,
    FileDropDemo: FileDropDemo,
    FileInput: FileInput,
    FileInputDemo: FileInputDemo,
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
    Modal: Modal,
    ModalDemo: ModalDemo,
    SearchBar: SearchBar,
    Select: Select,
    ClientSideSearchBar: ClientSideSearchBar,
    Slider: Slider,
    StarRating: StarRating,
    TextArea: TextArea,
    TextAreaDemo: TextAreaDemo,
    TextHighlight: TextHighlight,
    Toast: Toast,
    // ToastDemo: ToastDemo,
    ThemeSwitcher: ThemeSwitcher,
    PricingCard: PricingCard,
    PricingPlans: PricingPlans,

    DocsNav: DocsNav,

    // Icons
    WrenchIcon: WrenchIcon,
    EnvelopeIcon: EnvelopeIcon,
    QuestionMarkCircleIcon: QuestionMarkCircleIcon,
    CheckIcon: CheckIcon,
    DocumentArrowUpIcon: DocumentArrowUpIcon,
    LinkIcon: LinkIcon,
    PlusCircleIcon: PlusCircleIcon,
    PaperAirplaneIcon: PaperAirplaneIcon,
    LuPartyPopper: LuPartyPopper,
}

import { FaInstagram, FaXTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import appConfig from "@/config";
import TextLink from "@/components/atoms/TextLink";
import MadeWithTag from "@/components/atoms/MadeWithTag";
import Divider from "@/components/atoms/Divider";
import ThemeSwitcher from "@/components/molecules/ThemeSwitcher";
import { mergeClasses } from "@/utils/styling";

const defaultNavLinks = [
    { title: "Pricing", href: "#pricing" },
    { title: "Documentation", href: "/docs" },
    { title: "Support", href: "#" },
];

const defaultLegalLinks = [
    { title: "Policies", href: "/policies" },
    { title: "Privacy Policy", href: "/policies/privacy" },
    { title: "Terms of Service", href: "/policies/terms" },
    { title: "License", href: "/policies/license" },
];

const Footer = ({
    showLogo = true,
    showAppName = true,
    showAppDescription = true,
    showCopyright = true,
    showMadeWith = true,
    showThemeSwitcher = true,
    showSocials = false,
    navLinks = defaultNavLinks,  // { title, href, props }
    legalLinks = defaultLegalLinks,  // { title, href, props }
    copyrightText = "Copyright © 2025 - All Rights Reserved.",

    // Styling
    background = "bg-bg-0 dark:bg-bg-900",
    border = false,
    rounded = false,

    className = "",
    ...props
}) => {
    const { appName, appDescription, socialMedia } = appConfig;

    const footerClasses = mergeClasses(
        `flex items-center justify-center p-4 pt-5 pb-10 w-full z-50`,
        background,
        border && `border-t border-gray-200 dark:border-gray-700`,
        rounded && `rounded-tr-3xl`,
        className
    );

    return (
        <footer className={footerClasses} {...props}>
            <div className="flex max-md:flex-col max-md:items-center max-md:gap-10 w-full max-w-7xl px-5 sm:px-8 lg:px-8 justify-between p-8">
                <div className="flex flex-col text-center items-center md:text-left md:items-start">
                    <div className="flex items-center mb-2">
                        {showLogo && <img src="/logo.png" alt={appName} className="h-6 mr-2" />}
                        {showAppName && <h1 className="text-2xl font-semibold">{appName}</h1>}
                    </div>
                    {showAppDescription && <p className="text-gray-500 text-sm">{appDescription}</p>}
                    {showCopyright && <p className="text-gray-500 text-sm">{copyrightText}</p>}
                    {showThemeSwitcher && <ThemeSwitcher className="mt-2" />}
                    {showMadeWith && <MadeWithTag style="vertical" className="mt-4" />}
                </div>
                <div className="flex max-sm:flex-col gap-14 max-sm:gap-10 max-sm:items-center">
                    {showSocials && (
                        <div className="flex flex-col max-sm:flex-row gap-3 opacity-80">
                            {socialMedia.instagram && <TextLink href={socialMedia.instagram} scale><FaInstagram className="text-2xl" /></TextLink>}
                            {socialMedia.twitter && <TextLink href={socialMedia.twitter} scale><FaXTwitter className="text-2xl" /></TextLink>}
                            {socialMedia.github &&  <TextLink href={socialMedia.github} scale><FaGithub className="text-2xl" /></TextLink>}
                            {socialMedia.linkedin &&  <TextLink href={socialMedia.linkedin} scale><FaLinkedinIn className="text-2xl" /></TextLink>}
                        </div>
                    )}

                    {/*<Divider vertical className="max-sm:hidden" />*/}

                    {navLinks.length > 0 && (
                        <div className="flex flex-col gap-2 max-sm:items-center max-sm:text-center">
                            <p className="text-md font-semibold opacity-50 mb-1">Links</p>
                            {navLinks.map((link, idx) => (
                                <TextLink
                                    key={idx}
                                    href={link.href}
                                    className="text-sm max-sm:text-center"
                                    {...link.props}
                                    underline
                                    underlineClassName="hover:opacity-50 opacity-50"
                                >
                                    {link.title}
                                </TextLink>
                            ))}
                        </div>
                    )}
                    {legalLinks.length > 0 && (
                        <div className="flex flex-col gap-2 max-sm:items-center max-sm:text-center">
                            <p className="text-md font-semibold opacity-50 mb-1">Legal</p>
                            {legalLinks.map((link, idx) => (
                                <TextLink
                                    key={idx}
                                    href={link.href}
                                    className="text-sm max-sm:text-center"
                                    {...link.props}
                                    underline
                                    underlineClassName="hover:opacity-50 opacity-50"
                                >
                                    {link.title}
                                </TextLink>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </footer>
    );
}

export default Footer;
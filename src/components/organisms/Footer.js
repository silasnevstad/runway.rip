"use client";

import { FaInstagram, FaXTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa6";

import TextLink from "@/components/atoms/TextLink";
import MadeWithTag from "@/components/atoms/MadeWithTag";
import ThemeSwitcher from "@/components/molecules/ThemeSwitcher";
import { mergeClasses } from "@/utils/styling";
import appConfig, { landingConfig } from "@/config";
import Button from "@/components/atoms/Button";

const Footer = ({
    showLogo = landingConfig.footer.showLogo,
    showAppName = landingConfig.footer.showAppName,
    showAppDescription = landingConfig.footer.showAppDescription,
    showCopyright = landingConfig.footer.showCopyright,
    showMadeWith = landingConfig.footer.showMadeWith,
    showThemeSwitcher = landingConfig.footer.showThemeSwitcher,
    showSocials = landingConfig.footer.showSocials,
    navLinks = landingConfig.footer.navLinks,  // { title, href, props }
    legalLinks = landingConfig.footer.legalLinks, // { title, href, props }
    copyrightText = "Copyright © 2025 - All Rights Reserved.",

    background = landingConfig.footer.background,
    border = landingConfig.footer.showBorder,
    rounded = landingConfig.footer.rounded,

    className = "",
    ...props
}) => {
    const { appName, appDescription, socialMedia } = appConfig;

    const footerClasses = mergeClasses(
        `flex items-center justify-center pt-10 pb-20 w-full z-50`,
        background,
        border && `border-t border-gray-200 dark:border-gray-900`,
        rounded && `rounded-t-3xl`,
        className
    );

    return (
        <footer className={footerClasses} {...props}>
            <div className="flex max-md:flex-col max-md:items-center max-md:gap-10 w-full max-w-7xl px-5 sm:px-8 lg:px-8 justify-between">
                <div className="flex flex-col text-center gap-2 items-center md:text-left md:items-start">
                    {(showLogo || showAppName) && (
                        <div className="flex items-center mb-2">
                            {showLogo && <img src="/logo.png" alt={appName} className="h-6 mr-2" />}
                            {showAppName && <h1 className="text-2xl font-semibold">{appName}</h1>}
                        </div>
                    )}
                    {showAppDescription && <p className="text-gray-500 text-sm">{appDescription}</p>}
                    {showCopyright && <p className="text-gray-500 text-sm">{copyrightText}</p>}
                    {showThemeSwitcher && <ThemeSwitcher className="mt-4" />}
                    {showMadeWith && <MadeWithTag style="vertical" className="mt-4" />}
                </div>
                <div className="flex max-sm:flex-col gap-16 max-sm:gap-10 max-sm:items-center">
                    {showSocials && (
                        <div className="flex flex-col max-sm:flex-row gap-3 opacity-80">
                            {socialMedia.instagram && <TextLink href={socialMedia.instagram} scale><FaInstagram className="text-2xl" /></TextLink>}
                            {socialMedia.twitter && <TextLink href={socialMedia.twitter} scale><FaXTwitter className="text-2xl" /></TextLink>}
                            {socialMedia.github &&  <TextLink href={socialMedia.github} scale><FaGithub className="text-2xl" /></TextLink>}
                            {socialMedia.linkedin &&  <TextLink href={socialMedia.linkedin} scale><FaLinkedinIn className="text-2xl" /></TextLink>}
                        </div>
                    )}
                    {navLinks && navLinks.length > 0 && (
                        <div className="flex flex-col gap-2 max-sm:items-center max-sm:text-center">
                            <p className="text-md font-semibold opacity-50 mb-1">Links</p>
                            {navLinks.map((link, idx) => (
                                <TextLink
                                    key={idx}
                                    href={link.href}
                                    onClick={link.onClick}
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
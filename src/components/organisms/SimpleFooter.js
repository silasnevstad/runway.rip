import { FaInstagram, FaXTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa6";

import TextLink from "@/components/atoms/TextLink";
import MadeWithTag from "@/components/atoms/MadeWithTag";
import ThemeSwitcher from "@/components/molecules/ThemeSwitcher";
import { mergeClasses } from "@/utils/styling";
import appConfig, { landingConfig } from "@/config";

const SimpleFooter = ({
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
        `flex items-center justify-center py-10 w-full z-50`,
        background,
        border && `border-t border-gray-200 dark:border-gray-900`,
        rounded && `rounded-t-3xl`,
        className
    );

    return (
        <footer className={footerClasses} {...props}>
            <div className="flex flex-col w-7xl max-7xl">
                <div className="flex max-sm:flex-col flex-row justify-between sm:items-start">
                    <div className="flex flex-col max-sm:items-center gap-3">
                        <div className="flex max-sm:flex-col max-sm:items-center flex-row gap-2 text-center items-end">
                            {(showLogo || showAppName) && (
                                <div className="flex items-center">
                                    {showLogo && <img src="/logo.png" alt={appName} className="h-6 mr-2" />}
                                    {showAppName && <h1 className="text-2xl font-semibold">{appName}</h1>}
                                </div>
                            )}
                            {showAppDescription && <p className="text-gray-500 text-sm">{appDescription}</p>}
                        </div>
                        {showCopyright && <p className="text-gray-500 text-sm">{copyrightText}</p>}
                        <div className="flex max-sm:flex-col gap-16 max-sm:gap-10 max-sm:items-center">
                            {legalLinks && legalLinks.length > 0 && (
                                <div className="flex flex-row gap-2 max-sm:items-center max-sm:text-center">
                                    {legalLinks.map((link, idx) => (
                                        <TextLink
                                            key={idx}
                                            href={link.href}
                                            className="text-sm max-sm:text-center"
                                            {...link.props}
                                            fade
                                        >
                                            {link.title}
                                        </TextLink>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col sm:justify-end items-center sm:items-end gap-4 mt-8 sm:mt-2">
                        {showSocials && (
                            <div className="flex flex-row gap-3 opacity-80">
                                {socialMedia.instagram && <TextLink href={socialMedia.instagram} scale><FaInstagram className="text-2xl" /></TextLink>}
                                {socialMedia.twitter && <TextLink href={socialMedia.twitter} scale><FaXTwitter className="text-2xl" /></TextLink>}
                                {socialMedia.github &&  <TextLink href={socialMedia.github} scale><FaGithub className="text-2xl" /></TextLink>}
                                {socialMedia.linkedin &&  <TextLink href={socialMedia.linkedin} scale><FaLinkedinIn className="text-2xl" /></TextLink>}
                            </div>
                        )}
                        {showThemeSwitcher && <ThemeSwitcher />}
                        {showMadeWith && <MadeWithTag style="vertical" />}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default SimpleFooter;
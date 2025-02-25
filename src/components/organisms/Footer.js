import Image from "next/image";
import appConfig from "@/config";
import TextLink from "@/components/atoms/TextLink";
import { FaInstagram, FaXTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import MadeWithTag from "@/components/atoms/MadeWithTag";
import Divider from "@/components/atoms/Divider";
import ThemeSwitcher from "@/components/molecules/ThemeSwitcher";

const Footer = () => {
    const { appName, appDescription, socialMedia } = appConfig;
    return (
        <footer className="flex items-center justify-center p-4 w-full bg-bg-0 dark:bg-bg-900 border-t border-gray-200 rounded-tr-3xl dark:border-gray-700 pt-5 pb-10 z-10">
            <div className="flex max-md:flex-col-reverse max-md:gap-10 w-full max-w-7xl px-5 sm:px-8 lg:px-8 justify-between p-8">
                <div className="flex flex-col text-left items-start">
                    <h1 className="text-2xl font-semibold">{appName}</h1>
                    <p className="text-gray-500">{appDescription}</p>
                    <p className="text-gray-500 mb-2">Copyright © 2024. All Rights Reserved.</p>
                    <MadeWithTag style="vertical" />
                    <ThemeSwitcher className="mt-4" />
                </div>
                <div className="flex max-xl:pr-10 max-sm:gap-10 gap-3">
                    <div className="flex flex-col gap-3 opacity-80">
                        {socialMedia.instagram && <TextLink href={socialMedia.instagram} grow><FaInstagram className="text-2xl" /></TextLink>}
                        {socialMedia.twitter && <TextLink href={socialMedia.twitter} grow><FaXTwitter className="text-2xl" /></TextLink>}
                        {socialMedia.github &&  <TextLink href={socialMedia.github} grow><FaGithub className="text-2xl" /></TextLink>}
                        {socialMedia.linkedin &&  <TextLink href={socialMedia.linkedin} grow><FaLinkedinIn className="text-2xl" /></TextLink>}
                    </div>

                    <Divider vertical opacity={40} height={"1/2"} />

                    <div className="flex flex-col gap-2 mr-5">
                        <p className="text-md font-semibold opacity-50">Links</p>
                        <TextLink href="#pricing" className="text-sm">Pricing</TextLink>
                        <TextLink href="/docs" className="text-sm">Documentation</TextLink>
                        <TextLink href="#" className="text-sm">Support</TextLink>
                    </div>
                    <div className="flex flex-col gap-2 flex-nowrap whitespace-nowrap">
                        <p className="text-md font-semibold opacity-50">Legal</p>
                        <TextLink href="/policies" className="text-sm">Policies</TextLink>
                        <TextLink href="/policies/privacy" className="text-sm">Privacy Policy</TextLink>
                        <TextLink href="/policies/terms" className="text-sm">Terms of Service</TextLink>
                        <TextLink href="/policies/license" className="text-sm">License</TextLink>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
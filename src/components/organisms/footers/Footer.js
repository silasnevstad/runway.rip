import config from "@/config";
import { TextLink } from "@/components/atoms/Buttons";
import { FaInstagram, FaXTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import MadeWithTag from "@/components/atoms/MadeWithTag";

const Footer = () => {
    const { appName, appDescription, socialMedia } = config;
    return (
        <footer className="flex items-center justify-center p-4 w-full mt-20 border-t-2 border-gray-200 rounded-tr-3xl dark:border-gray-700 pt-5 pb-20">
            <div className="flex max-md:flex-col-reverse max-md:gap-10 max-w-7xl w-full justify-between p-8">
                <div className="flex flex-col text-left items-start">
                    <h1 className="text-2xl font-semibold">{appName}</h1>
                    <p className="text-gray-500">{appDescription}</p>
                    <p className="text-gray-500 mb-2">Copyright © 2024. All Rights Reserved.</p>
                    <MadeWithTag />
                </div>
                <div className="flex gap-20 max-xl:pr-10 max-sm:gap-10">
                    <div className="flex flex-col gap-3">
                        <TextLink href={socialMedia.instagram}><FaInstagram className="text-2xl" /></TextLink>
                        <TextLink href={socialMedia.twitter}><FaXTwitter className="text-2xl" /></TextLink>
                        <TextLink href={socialMedia.github}><FaGithub className="text-2xl" /></TextLink>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-lg font-semibold opacity-50">Links</p>
                        <TextLink href="#pricing">Pricing</TextLink>
                        <TextLink href="/docs">Documentation</TextLink>
                        <TextLink href="#">Support</TextLink>
                    </div>
                    <div className="flex flex-col gap-2 flex-nowrap whitespace-nowrap">
                        <p className="text-lg font-semibold opacity-50">Legal</p>
                        <TextLink href="#">Privacy Policy</TextLink>
                        <TextLink href="#">Terms of Service</TextLink>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
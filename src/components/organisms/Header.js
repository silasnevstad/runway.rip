import config from "@/config";
import { TextLink } from "@/components/atoms/Buttons";
import Link from "next/link";

const NavHeader = () => {
    const { appName } = config;
    return (
        <header className="flex justify-between items-center p-4 max-w-5xl w-full">
            <div className="flex items-center">
                <Link href="/public" className="text-2xl font-semibold">{appName}</Link>
                {/*<Link href="/" className="text-2xl font-semibold">ShipFast</Link>*/}
            </div>
            <div className="flex items-center space-x-10">
                <TextLink href="#how-it-works">How it Works</TextLink>
                <TextLink href="#pricing">Pricing</TextLink>
                <TextLink href="#faq">FAQ</TextLink>
            </div>
            <div className="flex items-center space-x-4">
                <TextLink href="/sign-up" className="text-1xl font-semibold">Sign Up</TextLink>
            </div>
        </header>
    );
}

export default NavHeader;
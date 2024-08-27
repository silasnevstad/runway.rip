import AuthForm from "@/components/organisms/AuthForm";
import { TextLink } from "@/components/atoms/Buttons";
import Divider from "@/components/atoms/Divider";

export default function DocumentationPage() {
    return (
        <div className="flex flex-col items-start max-w-prose gap-6 pb-40">
            <div>
                <h4 className="text-xl font-medium">Welcome to the Runway Docs! 👋</h4>
            </div>
            <p>
                Browse through the documentation to learn more about Runway and how to use it.
            </p>
        </div>
    );
}
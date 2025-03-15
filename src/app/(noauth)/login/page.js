import AuthForm from "@/components/auth/AuthForm";
import TextLink from "@/components/atoms/TextLink";
import { getSEOTags } from "@/libs/seo";
import appConfig from "@/config";
import AuthPage from "@/templates/AuthPage";

export const metadata = getSEOTags({
    title: `Login | ${appConfig.appName}`,
    canonicalUrlRelative: "/login",
});

export default function LoginPage() {
    return (
        <AuthPage mode="sign-in" />
    );
}
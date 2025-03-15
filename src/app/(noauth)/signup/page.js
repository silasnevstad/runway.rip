import AuthForm from "@/components/auth/AuthForm";
import TextLink from "@/components/atoms/TextLink";
import {getSEOTags} from "@/libs/seo";
import appConfig from "@/config";
import AuthPage from "@/templates/AuthPage";

export const metadata = getSEOTags({
    title: `Sign Up | ${appConfig.appName}`,
    canonicalUrlRelative: "/signup",
});

export default function SignUpPage() {
    return (
        <AuthPage mode="sign-up" />
    );
}
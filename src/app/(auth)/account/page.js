import UserForm from "@/app/(auth)/account/UserForm";
import { getSEOTags } from "@/libs/seo";
import appConfig from "@/config";

export const metadata = getSEOTags({
    title: `Account | ${appConfig.appName}`,
    canonicalUrlRelative: "/account",
});

export default function Account() {
    return (
        <div className="flex w-full h-full items-center justify-center">
            <UserForm />
        </div>
    )
}
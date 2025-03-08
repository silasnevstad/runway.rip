import UserForm from "@/app/(auth)/account/UserForm";
import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({
    title: "Account | Runway",
    canonicalUrlRelative: "/account",
});

export default function Account() {
    return (
        <div className="flex w-full h-full items-center justify-center">
            <UserForm />
        </div>
    )
}
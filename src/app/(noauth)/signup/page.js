import AuthForm from "@/components/auth/AuthForm";
import TextLink from "@/components/atoms/TextLink";
import {getSEOTags} from "@/libs/seo";

export const metadata = getSEOTags({
    title: "Sign Up | Runway",
    canonicalUrlRelative: "/signup",
});

export default function SignUpPage() {
    return (
        <div className="flex flex-col items-center w-full -mt-20 gap-2">
            <div className="flex flex-col items-center gap-2">
                <h1 className="max-[430px]:text-2xl text-3xl font-semibold">Create an account</h1>
                <p className="text-lg text-gray-500">Let's get you started</p>
            </div>
            <div className="flex flex-col items-center justify-center w-full max-w-md p-4">
                <div className="flex flex-col items-center justify-center w-full max-w-md p-4 rounded-lg">
                    <AuthForm mode={"signup"} />
                </div>
            </div>
            <div className="sm:absolute top-8 right-8 flex flex-col items-center sm:items-end opacity-90 hover:opacity-100">
                <p className="opacity-60 text-sm">Already have an account?</p>
                <TextLink href="/login" className="text-primary-500 hover:opacity-100">
                    Sign in
                </TextLink>
            </div>
        </div>
    );
}
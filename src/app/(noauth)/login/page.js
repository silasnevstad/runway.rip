import AuthForm from "@/components/auth/AuthForm";
import TextLink from "@/components/atoms/TextLink";

export default function LoginPage() {
    return (
        <div className="flex flex-col items-center w-full -mt-20 gap-2">
            <div className="flex flex-col items-center gap-2">
                <h1 className="text-3xl font-semibold">Welcome back!</h1>
                <p className="text-lg text-gray-500">Sign in to your account</p>
            </div>
            <div className="flex flex-col items-center justify-center w-full max-w-md p-4">
                <div className="flex flex-col items-center justify-center w-full max-w-md p-4 rounded-lg gap-2">
                    <AuthForm method="magiclink" mode="sign-in"/>
                    <AuthForm method="oauth" mode="sign-in"/>
                </div>
            </div>
            <div className="absolute top-8 right-8 flex flex-col items-end">
                <p className="opacity-60 text-sm">New around here?</p>
                <TextLink href="/sign-up" className="text-primary-500 hover:opacity-100">
                    Create an account
                </TextLink>
            </div>
        </div>
    );
}
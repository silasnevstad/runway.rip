import AuthForm from "@/components/auth/AuthForm";
import TextLink from "@/components/atoms/TextLink";

export default function AuthPage({
    mode,
}) {
    return (
        <div className="flex flex-col items-center w-full -mt-20 gap-2">
            <div className="flex flex-col items-center gap-2">
                <h1 className="max-[430px]:text-2xl text-3xl font-semibold">
                    {mode === "sign-up" ? "Create an account" : "Welcome back!"}
                </h1>
                <p className="text-lg text-gray-500">
                    {mode === "sign-up" ? "Let's get you started" : "Sign in to your account"}

                </p>
            </div>
            <div className="flex flex-col items-center justify-center w-full max-w-md p-4">
                <div className="flex flex-col items-center justify-center w-full max-w-md p-4 rounded-lg gap-2">
                    <AuthForm mode={mode}/>
                </div>
            </div>
            <div className="sm:absolute top-8 right-8 flex flex-col items-center sm:items-end opacity-90 hover:opacity-100">
                <p className="opacity-60 text-sm">
                    {mode === "sign-up" ? "Already have an account?" : "New around here?"}
                </p>
                <TextLink href={mode === "sign-up" ? "/login" : "/signup"} className="text-primary-500 hover:opacity-100">
                    {mode === "sign-up" ? "Sign In" : "Create an account"}
                </TextLink>
            </div>
        </div>
    );
}
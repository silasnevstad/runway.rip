import UserForm from "@/app/(auth)/account/UserForm";

export default function Account() {
    return (
        <div className="flex flex-col w-full h-full items-center">
            <h1 className="text-4xl font-bold mt-10">Account</h1>
            <UserForm />
        </div>
    )
}
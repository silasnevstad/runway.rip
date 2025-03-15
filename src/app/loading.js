import Loader from "@/components/atoms/Loader";

export default function LoadingPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-bg-0 dark:bg-bg-900">
            <Loader />
        </div>
    );
}
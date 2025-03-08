import Image from 'next/image';
import Button from "@/components/atoms/Button";
import appConfig from "@/config";
import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({
    title: "Confirm Email | Runway",
    canonicalUrlRelative: "/confirm-email",
});

export default function Page() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen w-full">
            <Image src="/images/envelope.png" width={200} height={200} alt="Email Confirmation" />
            <div className="p-10 text-center max-w-[50ch]">
                <h2 className="text-xl sm:text-2xl font-bold">Confirm Your Email</h2>
                <p className="mt-2 text-lg">
                    Please check your email and click on the link to confirm your email.
                </p>
            </div>
            <Button href="/login" variant="solid" lift size="sm">
                Continue
            </Button>
        </main>
    );
}

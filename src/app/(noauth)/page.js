import { getSchemaTags } from "@/libs/seo";
import LandingPage from "@/templates/LandingPage";

export default function Page() {
    return (
        <>
            {getSchemaTags({})}
            <main className="flex items-center flex-col w-full">
                <LandingPage />
            </main>
        </>
    );
}

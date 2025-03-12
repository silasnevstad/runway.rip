import { getSEOTags } from "@/libs/seo";
import appConfig from "@/config";

export const metadata = getSEOTags({
    title: `Dashboard | ${appConfig.appName}`,
    canonicalUrlRelative: "/dashboard",
});

export default function Dashboard() {
    return (
        <div className="flex flex-col w-full h-full justify-center items-center">
        </div>
    )
}
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { UserProvider } from "@/contexts/UserContext";
import { ToastProvider } from "@/contexts/ToastProvider";
import { getSEOTags } from "@/libs/seo";
import appConfig from "@/config";
import "./globals.css";


// 💡 Load your font(s)...
const inter = Inter({ subsets: ["latin"] });

export const metadata = getSEOTags({
    title: appConfig.appName,
    description: appConfig.appDescription,
    canonicalUrlRelative: "/",
});

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <script defer src="https://cloud.umami.is/script.js" data-website-id="2f7ce85f-381c-479a-918f-b5b011147caa"></script>
            </head>
            <body className={inter.className}>
                <ThemeProvider enableSystem={true} defaultTheme={'system'} attribute="class">
                    <UserProvider>
                        <ToastProvider>
                            {children}
                        </ToastProvider>
                    </UserProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}

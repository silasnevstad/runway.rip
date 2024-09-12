import config from "@/config";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import './globals.css';

// 💡 Load your font(s)...
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: config.appName,
    description: config.appDescription,
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <ThemeProvider defaultTheme="system" enableSystem={true}>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}

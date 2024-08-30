import config from "@/config";
import { Inter } from "next/font/google";
import './globals.css';

// 💡 Load your font(s)...
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: config.appName,
    description: config.appDescription,
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
                <body className={inter.className}>{children}</body>
        </html>
    );
}

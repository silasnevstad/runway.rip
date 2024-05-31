import { Inter } from "next/font/google";
import './globals.css';

// 💡 Load your font(s)...
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Nextboost",
    description: "Launch your ideas with a boost.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}

import { ThemeProvider } from "next-themes";
import { ToastProvider } from "@/contexts/ToastProvider";

export default function AppProviders({ children }) {
    return (
        <ThemeProvider enableSystem={true} defaultTheme={'system'} attribute="class">
            <ToastProvider>
                {children}
            </ToastProvider>
        </ThemeProvider>
    );
}
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import SimpleFooter from "@/components/organisms/SimpleFooter";

export default async function BaseLayout({
    header = false,
    leftNav,
    children,
    footer = false,
})  {
    return (
        <div className="flex flex-col min-h-screen bg-bg-0 dark:bg-bg-900">
            {/* Header */}
            {header && (
                <Header />
            )}

            {/* Left Navigation */}
            {leftNav && (
                <nav className="w-64 bg-bg-50 dark:bg-bg-800">
                    {leftNav}
                </nav>
            )}

            {/* Main Content */}
            <main className="flex flex-col grow">
                {children}
            </main>

            {/* Footer (use <Footer /> or <SimpleFooter />) */}
            {footer && <Footer />}
        </div>
    );
}
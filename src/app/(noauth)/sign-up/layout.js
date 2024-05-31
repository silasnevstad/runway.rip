export default function Layout({ children }) {
    return (
        <section className="flex flex-col items-center justify-center w-full h-screen">
            {children}
        </section>
    );
}
export default function Footer() {
    return (
        <>
            <header className="body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-yellow-500 mb-4 md:mb-0">
                        <span className="ml-3 text-xl">Watches.io</span>
                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base text-blackjustify-center">
                        <a href="/" className="mr-5 text-yellow-500 hover:text-yellow-300">Home</a>
                        <a href="/" className="mr-5 text-yellow-500 hover:text-yellow-300">About</a>
                        <a href="/" className="mr-5 text-yellow-500 hover:text-yellow-300">Contact</a>
                        <a href="/" className="mr-5 text-yellow-500 hover:text-yellow-300">Delivery</a>
                    </nav>
                </div>
            </header>
        </>
    );
}
export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 p-6">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
                <p className="text-sm text-center md:text-left text-gray-500">
                    &copy; latest 2024 <span className="text-yellow-500 font-semibold hover:text-yellow-300">Watches.io</span> — All Rights Reserved
                </p>
                <div className="flex justify-center space-x-4">
                    <a href="https://www.facebook.com/taha.siddiqui.77985741" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/fluent/30/ffffff/facebook-new.png" alt="Facebook" className="hover:opacity-80 transition-opacity" />
                    </a>
                    <a href="https://www.linkedin.com/in/taha-xiddiqui-b36686301/" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/fluent/30/ffffff/linkedin-2.png" alt="LinkedIn" className="hover:opacity-80 transition-opacity" />
                    </a>
                    <a href="https://www.instagram.com/xiddiqui_hun_yawr/" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/fluent/30/ffffff/instagram-new.png" alt="Instagram" className="hover:opacity-80 transition-opacity" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/fluent/30/ffffff/twitter.png" alt="Twitter" className="hover:opacity-80 transition-opacity" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
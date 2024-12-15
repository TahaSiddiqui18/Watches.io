export default function Carousel() {
    return (
        <div>
            <section className="bg-gradient-to-r from-cyan-500 to-yellow-500">
                <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
                        <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-gray-700 h-auto md:h-full flex flex-col">
                            <a href="/" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                                <img src="https://files.oaiusercontent.com/file-KemSbuCVbi4xcFigHHb5XQ?se=2024-12-15T13%3A24%3A19Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D18311e29-003b-497c-bd37-85463f4d0a6c.webp&sig=FKR2Q1BNHLZcPYTgXR2k%2BcAFcXaC3bSth85Rkv1VG0A%3D" alt="shoe 1" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                <h3 className="z-10 text-2xl font-medium text-white absolute p-4 left-0 top-0 xs:text-xl md:text-xl">
                                    Timeless Luxury Watches
                                </h3>
                            </a>
                        </div>

                        <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-gray-700">
                            <a href="/" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReETpqHYCS0u-wYV58jYGWIqli-FwZgB1xkg&s" alt="shoe 2" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                <h3 className="z-10 text-2xl font-medium text-white absolute p-4 left-0 top-0 xs:text-xl md:text-xl">
                                    High-Performance Simple Watches
                                </h3>
                            </a>
                            <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-2">
                                <a href="/" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                                    <img src="https://files.oaiusercontent.com/file-HpmXGEiB7giVCZ5PBiTwZt?se=2024-12-15T13%3A33%3A13Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D951555d8-0f5a-4ddd-a525-ef80fd9de69f.webp&sig=jsS0qCdH%2BHjEX8cRdyDVCwiOORm1W0070mmx87dz0XU%3D" alt="shoe 3" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                    <h3 className="z-10 text-2xl font-medium text-white absolute p-4 left-0 top-0 xs:text-xl md:text-lg">
                                        Sleek Minimalist Watches
                                    </h3>
                                </a>
                                <a href="/" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBlmn9nsSh2imB--TXRe1MxxsdV85QBf8GQw&s" alt="shoe 4" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                    <h3 className="z-10 text-2xl font-medium text-white absolute p-4 left-0 top-0 xs:text-xl md:text-lg">
                                        Lightweight Comfort Watches
                                    </h3>
                                </a>
                            </div>
                        </div>

                        <div className="col-span-2 sm:col-span-2 md:col-span-1 bg-gradient-to-r from-black to-gray-700 h-auto md:h-full flex flex-col">
                            <a href="/" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                                <img src="https://appleman.pk/cdn/shop/files/3_e7a6e623-53d4-406e-835f-544b82af8796.png?v=1709319331&width=2048" alt="shoe 5" className="absolute inset-0 sm:h-96 sm:w-60 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                <h3 className="z-10 text-2xl font-medium text-white absolute p-4 left-0 top-0 xs:text-xl md:text-xl">
                                    All-Day Wear Watches
                                </h3>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

// "use client"
import { FaBolt, FaRunning, FaSearch, FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
    return (
        <div className="grid xl:grid-cols-1 grid-cols-1 bg-gray-900">
            <div className="p-5">
                <div className="py-3 px-3 rounded-xl border w-full">
                    <div className="flex justify-between items-center">
                        <div className="flex justify-items-center items-center gap-2">
                            <FaRunning className="w-6 h-6 text-yellow-500 hover:text-cyan-300" />

                            <div style={{ position: "relative" }}>
                                <input
                                    className="rounded-3xl py-3 px-3 outline-none text-xs w-[350px] pr-10 hidden lg:block md:block"
                                />
                                <FaSearch className="w-5 h-5 text-lime-300 absolute right-3 top-1/4 transform-translate-y-1/2 hidden lg:block md:block" />
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-2">
                            <FaBolt className="w-5 h-5 text-amber-500 hidden lg:block md:block" />
                            <p className="text-sm text-white hidden lg:block md:block">Order Now & Get with In <span className="text-amber-500">15 minutes</span></p>


                            <FaShoppingCart className="ring-sky-400 hover:ring-amber-300 inline-block p-1.5 w-8 h-8 rounded-full ring-1 text-amber-500 hover:text-sky-400" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTneucuzUapErvjeAM4hbAIDgsmCFOH91l14A&s" alt="avatar" className="ring-amber-500 hover:ring-sky-400 inline-block w-6 h-10 rounded-full ring-1 text-sky-400 hover:text-amber-300" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

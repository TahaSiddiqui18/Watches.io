export default function Progresser() {
    return (
        <div className="bg-gradient-to-r from-cyan-500 to-yellow-500">
            <div className="flex items-start max-w-screen-lg w-full mx-auto pb-10 px-5">
                <div className="w-full">
                    <div className="flex items-center w-full">
                        <div className="w-8 h-8 shrink-0 mx-[-1px] bg-black p-1.5 flex justify-center items-center rounded-full">
                            <span className="text-white text-base font-bold">1</span>
                        </div>
                        <div className="w-full h-1 mx-4 rounded-lg bg-white"></div>
                    </div>
                    <div className="mt-2 mr-4 text-center md:text-start">
                        <h6 className="text-base font-bold text-black">
                            Step 1: Choose Your Watches
                        </h6>
                        <p className="text-xs text-white">
                            Explore our wide variety of watches and choose the one that perfectly matches your style and personality...
                        </p>
                    </div>
                </div>
                <div className="w-full">
                    <div className="flex items-center w-full">
                        <div className="w-8 h-8 shrink-0 mx-[-1px] bg-black p-1.5 flex justify-center items-center rounded-full">
                            <span className="text-white text-base font-bold">2</span>
                        </div>
                        <div className="w-full h-1 mx-4 rounded-lg bg-white"></div>
                    </div>
                    <div className="mt-2 mr-4 text-center md:text-start">
                        <h6 className="text-base font-bold text-black">
                            Step 2: Select the Size
                        </h6>
                        <p className="text-xs text-white">
                            Find your perfect fit with our sizing guide and ensure unmatched comfort and style for your wrist...
                        </p>
                    </div>
                </div>

                <div className="w-full">
                    <div className="flex items-center w-full">
                        <div className="w-8 h-8 shrink-0 mx-[-1px] bg-black p-1.5 flex justify-center items-center rounded-full">
                            <span className="text-white text-base font-bold">3</span>
                        </div>
                        <div className="w-full h-1 mx-4 rounded-lg bg-white"></div>
                    </div>
                    <div className="mt-2 mr-4 text-center md:text-start">
                        <h6 className="text-base font-bold text-black">
                            Step 3: Add to Cart
                        </h6>
                        <p className="text-xs text-white">
                            Once you&rsquo;ve selected your watch, add it to the cart to proceed with checkout and payment...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

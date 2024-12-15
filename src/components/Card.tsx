const FloatingImageContentBlock = () => {
    return (
        <section className="container mx-auto flex flex-col lg:flex-row items-center py-10">
            <div className="lg:w-1/2 lg:pr-10 pl-5 lg:pl-2">
                <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-yellow-500">Luxury Men&rsquo;s Watches </h2>
                <p className="text-white mb-4">Step into elegance and comfort with our exclusive men&rsquo;s footwear collection.</p>
                <button className="text-white bg-cyan-500 px-4 py-2 rounded hover:bg-yellow-300 transition duration-300">Order Now</button>
                <h3 className="text-2xl font-semibold mt-6 mb-2 text-white"><strong>Latest Shoes : </strong> Our New Shoes Launches</h3>
                <ol>
                    <li className="pt-0 lg:pt-1">
                        <strong>Finest materials</strong> Crafted from stainless steel, sapphire crystal, and premium leather straps.
                    </li>
                    <li className="pt-0 lg:pt-1">
                        <strong>Exceptional precision:</strong> Advanced quartz and automatic movement for accurate timekeeping.
                    </li>
                    <li className="pt-0 lg:pt-1">
                        <strong>Timeless designs:</strong> A perfect balance of modern innovation and classic elegance.
                    </li>
                    <li className="pt-0 lg:pt-1">
                        <strong>Superior durability:</strong>Scratch-resistant glass and water-resistant construction.
                    </li>
                    <li className="pt-0 lg:pt-1">
                        <strong>Versatile options:</strong>Available in multiple styles, colors, and strap materials.
                    </li>
                </ol>
            </div>
            <div className="lg:w-1/2 mt-6 lg:mt-0 px-5 lg:pr-2 md:mx-20 lg:mx-auto">
                <img src="https://whitbywatchco.com/cdn/shop/files/whitby-watch-co-canadian-watch-company-microbrand-limited-edition-watches-canada-automatice-watches-dive-pilot-flieger-titanium-assembled-in-canada-northern-time-standard_1600x.jpg?v=1711591033" />
            </div>
        </section>
    )
}
export default FloatingImageContentBlock;
import { FaShoppingCart } from "react-icons/fa";

const MenuItems = () => {
    const shoes = [
        {
            image: "https://img.freepik.com/free-photo/stylish-golden-watch-white-surface_181624-27078.jpg?ga=GA1.1.818473938.1732854510&semt=ais_hybrid",
            name: "Branded Watches",
            price: 29,
            originalPrice: 49,
        },
        {
            image: "https://img.freepik.com/free-photo/gold-watch-with-white-leather-band-lights-isolated-white_181624-28414.jpg?ga=GA1.1.818473938.1732854510&semt=ais_hybrid",
            name: "Ladies Watches",
            price: 34,
            originalPrice: 39,
        },
        {
            image: "https://img.freepik.com/free-vector/smart-watch-realistic-image-black_1284-11873.jpg?ga=GA1.1.818473938.1732854510&semt=ais_hybrid",
            name: "luxiries",
            price: 24,
            originalPrice: 29,
        },
        {
            image: "https://img.freepik.com/free-vector/round-face-smart-watch_78370-1422.jpg?ga=GA1.1.818473938.1732854510&semt=ais_hybrid",
            name: "Smart Watches",
            price: 49,
            originalPrice: 59,
        },
        {
            image: "https://img.freepik.com/premium-photo/silver-gold-watch-isolated-white-background-ai-generated_1022157-5801.jpg?ga=GA1.1.818473938.1732854510&semt=ais_hybrid",
            name: "Premium Watches",
            price: 44,
            originalPrice: 49,
        },
        {
            image: "https://img.freepik.com/premium-photo/watch_52137-20644.jpg?ga=GA1.1.818473938.1732854510&semt=ais_hybrid",
            name: "Wrist Watches",
            price: 39,
            originalPrice: 44,
        },
    ];

    return (
        <div className="relative text-center p-10">
            <div
                className="absolute inset-0"
                style={{
                    background: `url("https://media.istockphoto.com/id/935729048/vector/vintage-hand-drawn-clocks-and-watches-time-vector-seamless-pattern.jpg?s=612x612&w=0&k=20&c=7iINHtnWowzpeVOPg61lRG7gjZjDvDN-IVe6PJcoEe8=")`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    opacity: 0.5,
                }}
            />
            <h1 className="font-bold text-4xl mb-4 text-yellow-500 z-10 relative">Most Requested Shoes</h1>
            <h1 className="text-3xl text-cyan-500 z-10 relative">Explore Our Exclusive Collection</h1>
            <section
                id="Projects"
                className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-6 gap-x-14 mt-10 mb-5"
            >
                {shoes.map((shoe, index) => (
                    <div
                        key={index}
                        className="w-70 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl z-10 relative"
                    >
                        <a href="/" className="">
                            <img
                                src={shoe.image}
                                alt={`Product ${index + 1}`}
                                className="w-72 h-80 object-contain rounded-t-xl"
                            />
                            <div className="px-4 py-3 w-72">
                                <p className="text-lg font-bold text-yellow-300 truncate block capitalize">{shoe.name}</p>
                                <div className="flex items-center">
                                    <p className="text-lg font-semibold text-black my-3 cursor-auto">${shoe.price}</p>
                                    <del>
                                        <br />
                                        <p className="text-md font-semibold text-cyan-500 cursor-auto ml-2">
                                            ${shoe.originalPrice}
                                        </p>
                                    </del>
                                    <div className="ml-auto">
                                        <FaShoppingCart className="w-5 h-5 text-cyan-500" />
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default MenuItems;

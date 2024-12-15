const products = [
    {
        id: 1,
        title: "Premium Watches",
        price: "39.99$",
        imageURL: "https://img.freepik.com/premium-photo/silver-gold-watch-isolated-white-background-ai-generated_1022157-5368.jpg?ga=GA1.1.818473938.1732854510&semt=ais_hybrid",
        bgColor: "bg-green-400"
    },
    {
        id: 2,
        title: "Luxury Watches",
        price: "29.99$",
        imageURL: "https://img.freepik.com/premium-photo/luxury-watches-isolated-white-background-with-clipping-path-gold-watch-women-man-watches-female-male-watches_262663-682.jpg?ga=GA1.1.818473938.1732854510&semt=ais_hybrid",
        bgColor: "bg-purple-500"
    },
    {
        id: 3,
        title: "Smarts Watches",
        price: "49.99$",
        imageURL: "https://img.freepik.com/free-photo/smartwatch-screen-digital-device_53876-96810.jpg?ga=GA1.1.818473938.1732854510&semt=ais_hybrid",
        bgColor: "bg-amber-600"
    }
]
export default function ModefiedProduct() {
return (
    <div className="p-1 flex flex-wrap items-center justify-center bg-gradient-to-r from-cyan-500 to-yellow-500">
        {products.map((product) => (
            <div
                key={product.id}
                className={`flex flex-col shrink-0 m-6 relative overflow-hidden ${product.bgColor} rounded-lg shadow-lg group max-w-sm`}
            >
                <svg className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform" viewBox="0 0 375 283" fill="none" style={{ opacity: 0.1 }}>
                    <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                    <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                </svg>
                <div className="relative pt-10 px-10 items-center justify-center group-hover:scale-105 transition-transform ">
                    <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" style={{ background: "radial-gradient(black,teransparent 50%)", transform: "rotate3d(0,0,1,20deg) scale(1,0.6,1)", opacity: 0.2 }}></div>
                    <img src={product.imageURL} alt={product.title} className="relative w-52" />
                </div>
                <div className="relative text-white px-6 pb-6 mt-6">
                    <div className="flex justify-between">
                        <span className="block font-semibold text-xl">
                            {product.title}
                        </span>
                        <span className="block bg-white rounded-full text-orange-500 text-xs font-bold p-1.5">
                            {product.price}
                        </span>
                    </div>
                </div>
                </div>
        ))}
    </div>
);
}

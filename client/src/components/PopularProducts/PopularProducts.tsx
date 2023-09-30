import dslr1 from "../../assets/dslr/1.png";
import dslr2 from "../../assets/dslr/2.png";
import dslr3 from "../../assets/dslr/3.png";
import dslr4 from "../../assets/dslr/4.png";

export default function PopularProducts() {
    return (
        <section className="max-container mx-auto max-sm:mt-12">
            <div className="flex flex-col justify-start gap-5">
                <h2 className="text-4xl font-palanquin font-bold">
                    Popular Products
                </h2>
                <p className="lg:max-w-lg mt-2 font-montserrat text-gray-500">
                    Experience top-notch quality and style with our sought-after
                    selections. Discover a world of comfort, design and value
                </p>
            </div>
            <div className="grid gap-6 mt-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                <div className="cursor-pointer rounded-3xl flex flex-1 w-full flex-col items-center justify-center shadow-lg shadow-gray-150">
                    <img
                        src={dslr1}
                        width={250}
                        alt=""
                        className="hover:scale-110 transition ease-in-out duration-300"
                    />
                    <p className="text-xl">Nikon D810</p>
                    <p className="mt-2 text-xl font-bold">$899</p>
                    <div className="flex gap-4 mb-4 mt-4">
                        <button className="border px-4 py-2 rounded-full bg-blue text-white font-montserrat">
                            See details
                        </button>
                        <button className="border px-4 py-2 rounded-full bg-blue text-white font-montserrat">
                            Add to card
                        </button>
                    </div>
                </div>
                <div className="cursor-pointer rounded-3xl flex flex-1 w-full flex-col items-center justify-center shadow-lg shadow-gray-150">
                    <img
                        src={dslr2}
                        width={250}
                        alt=""
                        className="hover:scale-110 transition ease-in-out duration-300"
                    />
                    <p className="text-xl">Nikon D810</p>
                    <p className="mt-2 text-xl font-bold">$899</p>
                    <div className="flex gap-4 mb-4 mt-4">
                        <button className="border px-4 py-2 rounded-full bg-blue text-white font-montserrat">
                            See details
                        </button>
                        <button className="border px-4 py-2 rounded-full bg-blue text-white font-montserrat">
                            Add to card
                        </button>
                    </div>
                </div>
                <div className="cursor-pointer rounded-3xl flex flex-1 w-full flex-col items-center justify-center shadow-lg shadow-gray-150">
                    <img
                        src={dslr3}
                        width={250}
                        alt=""
                        className="hover:scale-110 transition ease-in-out duration-300"
                    />
                    <p className="text-xl">Nikon D810</p>
                    <p className="mt-2 text-xl font-bold">$899</p>
                    <div className="flex gap-4 mb-4 mt-4">
                        <button className="border px-4 py-2 rounded-full bg-blue text-white font-montserrat">
                            See details
                        </button>
                        <button className="border px-4 py-2 rounded-full bg-blue text-white font-montserrat">
                            Add to card
                        </button>
                    </div>
                </div>
                <div className="cursor-pointer rounded-3xl flex flex-1 w-full flex-col items-center justify-center shadow-lg shadow-gray-150">
                    <img
                        src={dslr4}
                        width={250}
                        alt=""
                        className="hover:scale-110 transition ease-in-out duration-300"
                    />
                    <p className="text-xl">Nikon D810</p>
                    <p className="mt-2 text-xl font-bold">$899</p>
                    <div className="flex gap-4 mb-4 mt-4">
                        <button className="border px-4 py-2 rounded-full bg-blue text-white font-montserrat">
                            See details
                        </button>
                        <button className="border px-4 py-2 rounded-full bg-blue text-white font-montserrat">
                            Add to card
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

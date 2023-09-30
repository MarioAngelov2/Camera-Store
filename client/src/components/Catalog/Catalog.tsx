import React from "react";
import dslr1 from "../../assets/dslr/1.png";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import Filter from "./Filter";

const Catalog = () => {
    return (
        <section className="padding">
            <div className=" mt-20 max-container mx-auto  flex flex-row justify-between">
                <div className="w-1/6 hidden lg:block">
                    <Filter />
                </div>
                <div className="w-full">
                    <div>{/* todo sort toggle */}</div>
                    <div className="w-full grid gap-y-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                        <div className="card mx-auto">
                            <div className="flex justify-center ">
                                <img src={dslr1} width={240} alt="" />
                            </div>
                            <div className="flex flex-col p-5 gap-4">
                                {/* badge */}
                                <div className="flex items-center gap-2">
                                    <span className="badge">Full-frame</span>{" "}
                                    <span className="badge">35mm</span>
                                </div>
                                {/* product title */}
                                <h2 className="product-title">Nikon D810</h2>
                                {/* product price */}
                                <div>
                                    <span className="text-xl font-bold">
                                        $890
                                    </span>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="text-sm line-through opacity-50">
                                            $1200
                                        </span>
                                        <span className="discount-precent">
                                            Save 30%
                                        </span>
                                    </div>
                                </div>
                                {/* product buttons */}
                                <div className="mt-5 flex gap-2 items-center">
                                    <button className="button-primary text-sm">
                                        Add to cart
                                    </button>
                                    <button className="button-icon">
                                        <FaHeart
                                            size={24}
                                            className="opacity-100"
                                        />
                                    </button>
                                    <button className="button-icon">
                                        <AiOutlineInfoCircle size={24} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* sample data */}

                        <div className="card mx-auto">
                            <div className="flex justify-center ">
                                <img src={dslr1} width={240} alt="" />
                            </div>
                            <div className="flex flex-col p-5 gap-4">
                                {/* badge */}
                                <div className="flex items-center gap-2">
                                    <span className="badge">Full-frame</span>{" "}
                                    <span className="badge">35mm</span>
                                </div>
                                {/* product title */}
                                <h2 className="product-title">Nikon D810</h2>
                                {/* product price */}
                                <div>
                                    <span className="text-xl font-bold">
                                        $890
                                    </span>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="text-sm line-through opacity-50">
                                            $1200
                                        </span>
                                        <span className="discount-precent">
                                            Save 30%
                                        </span>
                                    </div>
                                </div>
                                {/* product buttons */}
                                <div className="mt-5 flex gap-2 items-center">
                                    <button className="button-primary text-sm">
                                        Add to cart
                                    </button>
                                    <button className="button-icon">
                                        <FaHeart
                                            size={24}
                                            className="opacity-100"
                                        />
                                    </button>
                                    <button className="button-icon">
                                        <AiOutlineInfoCircle size={24} />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="card mx-auto">
                            <div className="flex justify-center ">
                                <img src={dslr1} width={240} alt="" />
                            </div>
                            <div className="flex flex-col p-5 gap-4">
                                {/* badge */}
                                <div className="flex items-center gap-2">
                                    <span className="badge">Full-frame</span>{" "}
                                    <span className="badge">35mm</span>
                                </div>
                                {/* product title */}
                                <h2 className="product-title">Nikon D810</h2>
                                {/* product price */}
                                <div>
                                    <span className="text-xl font-bold">
                                        $890
                                    </span>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="text-sm line-through opacity-50">
                                            $1200
                                        </span>
                                        <span className="discount-precent">
                                            Save 30%
                                        </span>
                                    </div>
                                </div>
                                {/* product buttons */}
                                <div className="mt-5 flex gap-2 items-center">
                                    <button className="button-primary text-sm">
                                        Add to cart
                                    </button>
                                    <button className="button-icon">
                                        <FaHeart
                                            size={24}
                                            className="opacity-100"
                                        />
                                    </button>
                                    <button className="button-icon">
                                        <AiOutlineInfoCircle size={24} />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="card mx-auto">
                            <div className="flex justify-center ">
                                <img src={dslr1} width={240} alt="" />
                            </div>
                            <div className="flex flex-col p-5 gap-4">
                                {/* badge */}
                                <div className="flex items-center gap-2">
                                    <span className="badge">Full-frame</span>{" "}
                                    <span className="badge">35mm</span>
                                </div>
                                {/* product title */}
                                <h2 className="product-title">Nikon D810</h2>
                                {/* product price */}
                                <div>
                                    <span className="text-xl font-bold">
                                        $890
                                    </span>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="text-sm line-through opacity-50">
                                            $1200
                                        </span>
                                        <span className="discount-precent">
                                            Save 30%
                                        </span>
                                    </div>
                                </div>
                                {/* product buttons */}
                                <div className="mt-5 flex gap-2 items-center">
                                    <button className="button-primary text-sm">
                                        Add to cart
                                    </button>
                                    <button className="button-icon">
                                        <FaHeart
                                            size={24}
                                            className="opacity-100"
                                        />
                                    </button>
                                    <button className="button-icon">
                                        <AiOutlineInfoCircle size={24} />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="card mx-auto">
                            <div className="flex justify-center ">
                                <img src={dslr1} width={240} alt="" />
                            </div>
                            <div className="flex flex-col p-5 gap-4">
                                {/* badge */}
                                <div className="flex items-center gap-2">
                                    <span className="badge">Full-frame</span>{" "}
                                    <span className="badge">35mm</span>
                                </div>
                                {/* product title */}
                                <h2 className="product-title">Nikon D810</h2>
                                {/* product price */}
                                <div>
                                    <span className="text-xl font-bold">
                                        $890
                                    </span>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="text-sm line-through opacity-50">
                                            $1200
                                        </span>
                                        <span className="discount-precent">
                                            Save 30%
                                        </span>
                                    </div>
                                </div>
                                {/* product buttons */}
                                <div className="mt-5 flex gap-2 items-center">
                                    <button className="button-primary text-sm">
                                        Add to cart
                                    </button>
                                    <button className="button-icon">
                                        <FaHeart
                                            size={24}
                                            className="opacity-100"
                                        />
                                    </button>
                                    <button className="button-icon">
                                        <AiOutlineInfoCircle size={24} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* sample data */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Catalog;

// card
{
    /* <div className="cursor-pointer h-[80%] 2xl:h-[25%] xl:h-[25%] lg:h-[40%] md:h-[40%] rounded-3xl flex flex-col flex-1 w-full items-center justify-center shadow-lg shadow-gray-150">
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
                            <img src={dslr1} width={200} className="w-[270px] lg:w-[200px]"/>
                            <div className="flex flex-col gap-1">
                                <p className="text-xl">Nikon D810</p>
                                <p>Stellar Low-Light Performance</p>
                                <p>Diverse Shooting Modes</p>
                                <p>Intuitive Touchscreen Control</p>
                            </div>
                            <div className="flex flex-col">
                                <p className="mt-2 text-xl font-bold text-center">
                                    $899
                                </p>
                                <div className="flex flex-row sm:flex-col gap-4 mb-4 mt-4">
                                    <button className="flex flex-col items-center border text-sm px-4 py-1 rounded-full bg-blue text-white font-montserrat">
                                        <AiOutlineInfoCircle size={22}/>
                                        Details
                                    </button>
                                    <button className="flex flex-col items-center border text-sm px-4 py-1 rounded-full bg-blue text-white font-montserrat">
                                        <FiShoppingCart size={22}/>
                                        Buy
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div> */
}

import dslr1 from "../../assets/dslr/1.png";
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
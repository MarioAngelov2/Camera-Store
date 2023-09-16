import { useState } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="fixed top-0 bg-white right-0 padding-x py-4 z-10 w-full">
            <nav className="max-container mx-auto flex justify-between items-center">
                <h1 className="font-black text-3xl">
                    <a href="#home">
                        PHOTO<span className="text-blue">LAND</span>
                    </a>
                </h1>
                <div className="relative max-lg:hidden">
                    <input
                        type="text"
                        placeholder="Search for a camera"
                        className="border px-8 py-2 outline-none rounded-full shadow-md"
                    />
                    <AiOutlineSearch
                        size={20}
                        className="absolute top-3 right-4"
                    />
                </div>
                <ul className="hidden lg:flex items-center gap-8 font-montserrat font-semibold tracking-wide">
                    <li>
                        <a href="#products">Catalog</a>
                    </li>
                    <li>
                        <a href="#about-us">About</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                    <li>
                        <a href="#services">Services</a>
                    </li>
                </ul>
                {isOpen ? (
                    <button
                        className="hidden max-lg:block"
                        onClick={() => setIsOpen(false)}
                    >
                        <AiOutlineClose size={30} />
                    </button>
                ) : (
                    <button
                        className="hidden max-lg:block"
                        onClick={() => setIsOpen(true)}
                    >
                        <RxHamburgerMenu size={30} />
                    </button>
                )}
            </nav>
            {isOpen && (
                <nav className="max-container mx-auto absolute">
                    <div className="bg-white flex fixed w-[60%] h-[40%] top-6">
                        <ul className="flex flex-col items-start gap-4 text-2xl tracking-wide">
                            <li>Catalog</li>
                            <li>Delivery</li>
                            <li>About us</li>
                        </ul>
                    </div>
                </nav>
            )}
        </section>
    );
}

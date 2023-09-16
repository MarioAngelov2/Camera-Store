import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

export function Footer() {
    return (
        <footer id="contact" className="max-container mx-auto">
            <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
                <div className="flex flex-col items-start">
                    <h2 className="text-white text-xl font-bold">PHOTOLAND</h2>
                    <div className="flex flex-row gap-5">
                        <BsFacebook size={30} className="text-white mt-4" />
                        <BsInstagram size={30} className="text-white mt-4" />
                        <BsTwitter size={30} className="text-white mt-4" />
                    </div>
                </div>
                <div className="flex flex-col items-start">
                    <h2 className="text-white text-2xl font-semibold font-palanquin">
                        Products
                    </h2>
                    <ul className="text-white flex flex-col gap-1 mt-4 leading-normal">
                        <li>Camera</li>
                        <li>Lenses</li>
                        <li>Accessories</li>
                        <li>Video Camera</li>
                    </ul>
                </div>
                <div className="flex flex-col items-start">
                    <h2 className="text-white text-2xl font-semibold font-palanquin">
                        Help
                    </h2>
                    <ul className="text-white flex flex-col gap-1 mt-4 leading-normal">
                        <li>About us</li>
                        <li>FAQs</li>
                        <li>How it works</li>
                        <li>Privacy policy</li>
                        <li>Payment policy</li>
                    </ul>
                </div>
                <div className="flex flex-col items-start">
                    <h2 className="text-white text-2xl font-semibold font-palanquin">
                        Get in touch
                    </h2>
                    <ul className="text-white flex flex-col gap-1 mt-4 leading-normal">
                        <li>customer@gmail.com</li>
                        <li>+8712345678</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

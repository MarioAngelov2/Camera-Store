import { BsTruck, BsShieldCheck } from "react-icons/bs";
import { FaHandHoldingHeart } from "react-icons/fa";

export default function CustomerService() {
    return (
        <section id="about-us" className="max-container mx-auto py-12">
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                <div className="shadow-lg rounded-2xl py-6 px-8">
                    <div className="bg-blue text-white rounded-full w-11 flex h-11 justify-center items-center mb-4">
                        <BsTruck size={28} />
                    </div>
                    <h3 className="text-2xl font-bold font-palanquin mb-3">
                        Free shiping
                    </h3>
                    <p className="font-montserrat">
                        Enjoy seamless shopping with our complimentary service
                    </p>
                </div>
                <div className="shadow-lg rounded-2xl py-6 px-8">
                    <div className="bg-blue text-white rounded-full w-11 flex h-11 justify-center items-center mb-4">
                        <BsShieldCheck size={28} />
                    </div>
                    <h3 className="text-2xl font-bold font-palanquin mb-3">
                        Secure Payment
                    </h3>
                    <p className="font-montserrat">
                        Experience worry-free transactions with our secure
                        payment options.
                    </p>
                </div>
                <div className="shadow-lg rounded-2xl py-6 px-8">
                    <div className="bg-blue text-white rounded-full w-11 flex h-11 justify-center items-center mb-4">
                        <FaHandHoldingHeart size={28} />
                    </div>
                    <h3 className="text-2xl font-bold font-palanquin mb-3">
                        Love to help you
                    </h3>
                    <p className="font-montserrat">
                        Our dedicated team is here to assist you every step of
                        the way.
                    </p>
                </div>
            </div>
        </section>
    );
}

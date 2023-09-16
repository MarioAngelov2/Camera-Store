import dslr from "../../assets/dslr/2.png";
import { FiSun } from "react-icons/fi";
import { PiSlidersBold } from "react-icons/pi";
import { BsCardImage } from "react-icons/bs";
import { ImVideoCamera } from "react-icons/im";
import { AiOutlineWifi } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { BiRightArrowAlt } from "react-icons/bi";

export default function Hero() {
    return (
        <section
            id="home"
            className="flex max-container mx-auto w-full xl:flex-row flex-col justify-center min-h-screen gap-4"
        >
            <div className="relative xl:w-2/5 flex flex-col justify-center items-start max-xl:items-center max-md:items-start w-full max-xl:padding-x max-xl:pt-48">
                <p className="text-xl font-semibold tracking-wide font-palanquin">
                    Special Offer
                </p>
                <h1 className="text-8xl max-xl:text-6xl font-black mt-2 font-montserrat max-sm:text-[72px] max-sm:leading-[82px] max-lg:text-center max-md:text-start">
                    Save <span className="text-blue">20%</span> On Your First
                    Order
                </h1>
                <button className="flex items-center gap-3 px-6 py-2 rounded-full bg-blue text-white mt-8 border font-montserrat">
                    Shop Now
                    <BiRightArrowAlt
                        size={23}
                        className="bg-white text-blue rounded-full"
                    />
                </button>
            </div>
            {/* right side */}
            <div className="relative flex-1 flex flex-col justify-center items-center xl:min-h-screen">
                <img src={dslr} width={720} alt="" className="object-contain" />
                <div className="grid grid-cols-2 gap-12 font-montserrat">
                    <div
                        className="flex items-center justify-start
             gap-3"
                    >
                        <FiSun size={36} />
                        <div className="flex flex-col items-start">
                            <h2 className="text-lg">ISO</h2>
                            <h6 className="text-xs">100-32 000</h6>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <PiSlidersBold size={36} />
                        <div className="flex flex-col items-start">
                            <h2 className="text-lg">DP RAW</h2>
                            <h6 className="text-xs">Post-processing</h6>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <BsCardImage size={36} />
                        <div className="flex flex-col items-start">
                            <h2 className="text-lg">30.4 MP</h2>
                            <h6 className="text-xs">Superb image quality</h6>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <ImVideoCamera size={36} />
                        <div className="flex flex-col items-start">
                            <h2 className="text-lg">4K + Full HD</h2>
                            <h6 className="text-xs">8 MP Shooting</h6>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <AiOutlineWifi size={36} />
                        <div className="flex flex-col items-start">
                            <h2 className="text-lg">Wi-Fi/NFC</h2>
                            <h6 className="text-xs">Connect to mobile</h6>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <CiLocationOn size={36} />
                        <div className="flex flex-col items-start">
                            <h2 className="text-lg">GPS</h2>
                            <h6 className="text-xs">Track and record</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

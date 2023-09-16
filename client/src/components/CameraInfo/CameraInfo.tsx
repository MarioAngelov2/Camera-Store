import sony from "../../assets/mirrorless/1.png";

export function CameraInfo() {
    return (
        <section
            id="cameraInfo"
            className="max-container mx-auto flex flex-col xl:flex-row items-center gap-10 justify-between mt-10"
        >
            <div className="flex flex-1 flex-col justify-start gap-5">
                <h1 className="text-4xl font-palanquin font-bold">
                    We Provide You Super Quality Camera Gear
                </h1>
                <p className="text-base leading-normal text-gray-500 font-montserrat">
                    Welcome to <span>PHOTOLAND</span>, your premier online
                    destination for exceptional camera gear. Our carefully
                    curated collection features top-quality cameras, lenses,
                    accessories, and more, designed to elevate your photography.
                    We're more than just a store; we're your trusted partner on
                    your photographic journey. Explore our offerings and join a
                    community passionate about capturing moments of brilliance.
                </p>
            </div>
            <div>
                <img src={sony} width={520} alt="" />
            </div>
        </section>
    );
}

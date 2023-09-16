export function Subscribe() {
    return (
        <section id="contact-us" className="max-container mx-auto">
            <div className="flex max-lg:flex-col items-center justify-between">
                <h2 className="text-3xl lg:max-w-[30%] font-palanquin font-black">
                    Sign Up for <span>Updates</span> & Newsletter
                </h2>
                <div className="relative lg:max-w-[50%] w-full max-lg:mt-4">
                    <input
                        type="text"
                        placeholder="info@gmail.com"
                        className="border outline-none w-full h-14 rounded-full pl-4 hover:shadow-lg shadow-gray-100 transition ease-in-out duration-500"
                    />
                    <div className="absolute top-2 right-2 flex max-sm:justify-end items-center max-sm:w-full">
                        <button className="border px-6 py-2 rounded-full bg-blue text-white">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

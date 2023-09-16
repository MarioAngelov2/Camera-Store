import person1 from "../../assets/people/person1.jpg";
import person2 from "../../assets/people/person2.jpg";

export function CustomerFeedback() {
    return (
        <section className="max-container mx-auto flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold font-palanquin mb-6">
                What Our <span className="text-blue">Customers</span> Say?
            </h2>
            <p className="text-lg text-gray-500">
                Hear genuine stories from our satisfied customers about their
                experience with us.
            </p>
            <div className="flex flex-1 gap-32 justify-evenly max-lg:flex-col mt-20">
                <div className="flex flex-col gap-4 justify-center items-center">
                    <img
                        src={person2}
                        alt=""
                        className="rounded-full object-cover w-[120px] h-[120px]"
                    />
                    <p className="text-center text-gray-500">
                        I recently made my first purchase from{" "}
                        <span className="font-bold text-black">PHOTOLAND</span>,
                        and I couldn't be happier with the experience. The
                        camera gear I ordered arrived promptly and in perfect
                        condition. The quality of the products exceeded my
                        expectations, and I can see the difference in my
                        photography already.
                    </p>
                    <h3 className="text-xl font-semibold">Wonder Woman</h3>
                </div>
                <div className="flex flex-col gap-4 justify-center items-center">
                    <img
                        src={person1}
                        alt=""
                        className="rounded-full object-cover w-[120px] h-[120px]"
                    />
                    <p className="text-center text-gray-500">
                        I recently made my first purchase from{" "}
                        <span className="font-bold text-black">PHOTOLAND</span>,
                        and I couldn't be happier with the experience. The
                        camera gear I ordered arrived promptly and in perfect
                        condition. The quality of the products exceeded my
                        expectations, and I can see the difference in my
                        photography already.
                    </p>
                    <h3 className="text-xl font-semibold">Black Adam</h3>
                </div>
            </div>
        </section>
    );
}

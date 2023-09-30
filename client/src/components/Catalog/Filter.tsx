import React from "react";

const Filter = () => {
    return (
        <>
            <div className="flex flex-col rounded-md py-1.5">
                <h1 className="font-bold text-xl text-center">Manufacturer</h1>
                <ul className="mt-4">
                    <li className="text-base border-b-2 pb-1 pt-3">
                        <label htmlFor="">
                            <input type="checkbox" className="mr-3" />
                            Nikon
                        </label>
                    </li>
                    <li className="text-base border-b-2 pb-1 pt-3">
                        <label htmlFor="">
                            <input type="checkbox" className="mr-3" />
                            Canon
                        </label>
                    </li>
                    <li className="text-base border-b-2 pb-1 pt-3">
                        <label htmlFor="">
                            <input type="checkbox" className="mr-3" />
                            Fujifilm
                        </label>
                    </li>
                    <li className="text-base border-b-2 pb-1 pt-3">
                        <label htmlFor="">
                            <input type="checkbox" className="mr-3" />
                            Sony
                        </label>
                    </li>
                </ul>
            </div>
            {/* second row */}
            <div className="flex flex-col rounded-md py-1.5 mt-6">
                <h1 className="font-bold text-xl text-center">Color</h1>
                <ul className="mt-4">
                    <li className="text-base border-b-2 pb-1 pt-3">
                        <label htmlFor="">
                            <input type="checkbox" className="mr-3" />
                            White
                        </label>
                    </li>
                    <li className="text-base border-b-2 pb-1 pt-3">
                        <label htmlFor="">
                            <input type="checkbox" className="mr-3" />
                            Graphite
                        </label>
                    </li>
                    <li className="text-base border-b-2 pb-1 pt-3">
                        <label htmlFor="">
                            <input type="checkbox" className="mr-3" />
                            Black
                        </label>
                    </li>
                    <li className="text-base border-b-2 pb-1 pt-3">
                        <label htmlFor="">
                            <input type="checkbox" className="mr-3" />
                            Gray
                        </label>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Filter;

import { useState } from "react";
import AdminDashboard from "./AdminDashboard";

const CreateProduct = () => {
    const [openForm, setOpenForm] = useState<Boolean>(false);

    const handleOpenForm = () => {
        setOpenForm(!openForm);
    };

    return (
        <>
            <AdminDashboard>
                <div className="flex flex-col lg:px-10">
                    <div>
                        <button className="admin-button">
                            Add new product
                        </button>
                    </div>
                    <div className="mt-10">
                        <h1 className="text-2xl font-montserrat">
                            New Product
                        </h1>
                        <form action="" className="mt-4">
                            <h3 className="text-xl mb-1 font-montserrat">
                                Camera Model
                            </h3>
                            <input
                                className="admin-input"
                                type="text"
                                placeholder="Canon EOS 5D Mark IV"
                            />
                            <h3 className="text-xl mb-1 mt-4 font-montserrat">
                                Price
                            </h3>
                            <input
                                className="admin-input"
                                type="text"
                                placeholder="$2000"
                            />
                            <h3 className="text-xl mb-1 mt-4 font-montserrat">
                                Discounted Price{" "}
                                <span className="text-sm font-light text-gray-400">
                                    *optional
                                </span>
                            </h3>
                            <input
                                className="admin-input"
                                type="text"
                                placeholder="$1700"
                            />
                            <h3 className="text-xl mb-1 mt-4 font-montserrat">
                                Camera Type
                            </h3>
                            <input
                                className="admin-input"
                                type="text"
                                placeholder="Full Frame"
                            />
                            <h3 className="text-xl mb-1 mt-4 font-montserrat">
                                Description
                            </h3>
                            <textarea
                                className="admin-input h-32"
                                placeholder="Description..."
                            />
                            {/* photos */}
                            <h3 className="text-xl mb-1 mt-4 font-montserrat">
                                Upload Photos From URL
                            </h3>{" "}
                            <div className="flex flex-col md:flex-row gap-2">
                                <input
                                    className="admin-input"
                                    type="text"
                                    placeholder="Place your link here..."
                                />
                                <button className="admin-button">Upload</button>
                            </div>
                            <div className="flex justify-center md:justify-start">
                                <button className="admin-button mt-4">Add product</button>
                            </div>
                        </form>
                    </div>
                </div>
            </AdminDashboard>
        </>
    );
};

export default CreateProduct;

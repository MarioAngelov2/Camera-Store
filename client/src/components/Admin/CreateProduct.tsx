import { useState } from "react";
import AdminDashboard from "./AdminDashboard";
import * as adminAPI from "../../api/adminAPI";
import { FormEv } from "../../types";

const CreateProduct = () => {
    const [openForm, setOpenForm] = useState<Boolean>(false);
    const [name, setName] = useState<string>("");
    const [price, setPrice] = useState<string>("");
    const [discountedPrice, setDiscountedPrice] = useState<string>("");
    const [cameraType, setCameraType] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [photos, setPhotos] = useState<string>("");

    const handleOpenForm = () => {
        setOpenForm(!openForm);
    };

    const data = {
        name,
        price,
        discountedPrice,
        cameraType,
        description,
        photos,
    };

    async function addListing(event: FormEv) {
        event.preventDefault();

        try {
            const response = await adminAPI.createListing({ ...data });
            console.log(response);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

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
                        <form onSubmit={addListing} action="" method="POST" className="mt-4">
                            <h3 className="text-xl mb-1 font-montserrat">
                                Camera Model
                            </h3>
                            <input
                                className="admin-input"
                                type="text"
                                placeholder="Canon EOS 5D Mark IV"
                                value={name}
                                onChange={(ev) =>
                                    setName(ev.target.value)
                                }
                            />
                            <h3 className="text-xl mb-1 mt-4 font-montserrat">
                                Price
                            </h3>
                            <input
                                className="admin-input"
                                type="text"
                                placeholder="$2000"
                                value={price}
                                onChange={(ev) => setPrice(ev.target.value)}
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
                                value={discountedPrice}
                                onChange={(ev) =>
                                    setDiscountedPrice(ev.target.value)
                                }
                            />
                            <h3 className="text-xl mb-1 mt-4 font-montserrat">
                                Camera Type
                            </h3>
                            <input
                                className="admin-input"
                                type="text"
                                placeholder="Full Frame"
                                value={cameraType}
                                onChange={(ev) =>
                                    setCameraType(ev.target.value)
                                }
                            />
                            <h3 className="text-xl mb-1 mt-4 font-montserrat">
                                Description
                            </h3>
                            <textarea
                                className="admin-input h-32"
                                placeholder="Description..."
                                value={description}
                                onChange={(ev) =>
                                    setDescription(ev.target.value)
                                }
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
                                    value={photos}
                                    onChange={(ev) =>
                                        setPhotos(ev.target.value)
                                    }
                                />
                                <button className="admin-button">Upload</button>
                            </div>
                            <div className="flex justify-center md:justify-start">
                                <button className="admin-button mt-4">
                                    Add product
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </AdminDashboard>
        </>
    );
};

export default CreateProduct;

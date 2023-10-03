import { useState } from "react";
import { BiHomeAlt2 } from "react-icons/bi";
import { HiOutlineArchiveBox } from "react-icons/hi2";
import { BsListTask } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { BsArrowLeftShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import CreateProduct from "./CreateProduct";

const AdminDashboard = ({ children }: any) => {
    const [open, setOpen] = useState<Boolean>(false);

    return (
        <section className="">
            <div className="flex">
                <div
                    className={`${
                        open ? "w-72" : "w-20"
                    } duration-300 min-h-screen bg-gray-800 p-5 pt-8 relative`}
                >
                    <BsArrowLeftShort
                        onClick={() => setOpen(!open)}
                        size={20}
                        className={`absolute cursor-pointer -right-4 top-9 w-9 h-8 border-2 rounded-full text-black bg-white ${
                            !open && "rotate-180"
                        }`}
                    />
                    <div className="flex gap-x-4 items-center">
                        <h1
                            className={`uppercase font-extrabold text-2xl text-white duration-300 ${
                                !open && "scale-0"
                            }`}
                        >
                            Photoland
                        </h1>
                    </div>
                    <ul className="flex flex-col gap-4 mt-8">
                        <Link
                            to={"/admin/dashboard"}
                            className="link-admin-panel"
                        >
                            <BiHomeAlt2 size={20} />
                            <span
                                className={`${
                                    !open && "hidden"
                                } origin-left duration-200`}
                            >
                                Dashboard
                            </span>
                        </Link>
                        <Link
                            to={"/admin/dashboard/create-product"}
                            className="link-admin-panel"
                        >
                            <HiOutlineArchiveBox size={20} />
                            <span
                                className={`${
                                    !open && "hidden"
                                } origin-left duration-200`}
                            >
                                Products
                            </span>
                        </Link>
                        <Link
                            to={"/admin/dashboard/orders"}
                            className="link-admin-panel"
                        >
                            <BsListTask size={20} />
                            <span
                                className={`${
                                    !open && "hidden"
                                } origin-left duration-200`}
                            >
                                Orders
                            </span>
                        </Link>
                        <Link to={""} className="link-admin-panel">
                            <FiSettings size={20} />
                            <span
                                className={`${
                                    !open && "hidden"
                                } origin-left duration-200`}
                            >
                                Settings
                            </span>
                        </Link>
                        <Link to={""} className="link-admin-panel">
                            <FiLogOut size={20} />
                            <span
                                className={`${
                                    !open && "hidden"
                                } origin-left duration-200`}
                            >
                                Logout
                            </span>
                        </Link>
                    </ul>
                </div>
                <div className="p-7 text-2xl font-semibold flex-1 h-screen overflow-y-auto">
                    {children}
                </div>
            </div>
        </section>
    );
};

export default AdminDashboard;

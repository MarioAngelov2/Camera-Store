import React from "react";
import { BiHomeAlt2 } from "react-icons/bi";
import { HiOutlineArchiveBox } from "react-icons/hi2";
import { BsListTask } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";

const AdminDashboard = () => {
    return (
        <section className="">
            <div className="max-container flex h-screen">
                <div className="bg-gray-800 flex flex-col min-w-[15%] w-[15%] h-screen py-4 px-4">
                    <h1 className="text-white uppercase font-extrabold text-2xl">
                        Photoland
                    </h1>
                    <span className="text-white font-palanquin">
                        Admin Panel
                    </span>
                    <ul className="flex flex-col gap-4 mt-8">
                        <li className="link-admin-panel">
                            <BiHomeAlt2 size={20} />
                            Dashboard
                        </li>
                        <li className="link-admin-panel">
                            <HiOutlineArchiveBox size={20} />
                            Products
                        </li>
                        <li className="link-admin-panel">
                            <BsListTask size={20} />
                            Orders
                        </li>
                        <li className="link-admin-panel">
                            <FiSettings size={20} />
                            Settings
                        </li>
                        <li className="link-admin-panel">
                            <FiLogOut size={20} />
                            Logout
                        </li>
                    </ul>
                </div>
                <div className="bg-gray-100 min-w-[85%] w-[85%] flex h-screen py-4 px-4">
                    <h1>Rest of the pate</h1>
                </div>
            </div>
        </section>
    );
};

export default AdminDashboard;

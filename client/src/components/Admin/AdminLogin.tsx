import { useState } from "react";
import { FormEv } from "../../types";
import * as adminAPI from "../../api/adminAPI";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [user, setUser] = useState<[]>([]);
    const navigate = useNavigate();

    async function handleLogin(event: FormEv) {
        event.preventDefault();
        try {
            const data = { email, password };
            await adminAPI.loginAdmin(data);
            navigate('/admin/dashboard')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section className="padding min-h-screen bg-gray-100">
            <div className="max-container mx-auto mt-28 flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center shadow-lg shadow-gray-400 rounded-xl min-w-[80%] xl:min-w-[30%]  py-12">
                    <h1 className="font-bold font-montserrat text-2xl">
                        Log As Admin
                    </h1>
                    <form
                        onSubmit={handleLogin}
                        className="flex flex-col gap-2 mt-4"
                        action=""
                    >
                        <input
                            className="input-primary"
                            type="text"
                            placeholder="Admin"
                            value={email}
                            onChange={(ev) => setEmail(ev.target.value)}
                        />
                        <input
                            className="input-primary"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(ev) => setPassword(ev.target.value)}
                        />
                        <button className="button-primary mt-4">Login</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AdminLogin;

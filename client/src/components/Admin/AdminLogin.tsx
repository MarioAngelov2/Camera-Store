
const AdminLogin = () => {
    return (
        <section className="padding min-h-screen bg-gray-100">
            <div className="max-container mx-auto mt-28 flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center shadow-lg shadow-gray-400 rounded-xl min-w-[80%] xl:min-w-[30%]  py-12">
                    <h1 className="font-bold font-montserrat text-2xl">
                        Log As Admin
                    </h1>
                    <form className="flex flex-col gap-2 mt-4" action="">
                        <input
                            className="input-primary"
                            type="text"
                            placeholder="Admin"
                        />
                        <input
                            className="input-primary"
                            type="password"
                            placeholder="Password"
                        />
                        <button className="button-primary mt-4">Login</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AdminLogin;

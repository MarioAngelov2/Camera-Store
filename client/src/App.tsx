import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import PopularProducts from "./components/PopularProducts/PopularProducts";
import CameraInfo from "./components/CameraInfo/CameraInfo";
import CustomerService from "./components/CustomService/CustomerService";
import CustomerFeedback from "./components/CustomerFeedback/CustomerFeedback";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <main className="relative">
            <Navbar />
            <section className="xl:padding-l wide:padding-r padding-b">
                <Hero />
            </section>
            <section className="padding">
                <PopularProducts />
            </section>
            <section className="padding">
                <CameraInfo />
            </section>
            <section className="padding">
                <CustomerService />
            </section>
            <section className="padding bg-slate-gray">
                <CustomerFeedback />
            </section>
            <section className="padding padding-y padding-x">
                <Subscribe />
            </section>
            <section className="padding bg-black">
                <Footer />
            </section>
        </main>
    );
}

export default App;

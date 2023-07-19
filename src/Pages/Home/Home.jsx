import AboutUs from "../../Components/AboutUs";
import Certification from "../../Components/Certification";
import ContactUs from "../../Components/ContactUs";
import Footer from "../../Components/Footer";
import HeadSection from "../../Components/HeadSection";
import NavBar from "../../Components/NavBar";
import Products from "../../Components/Products";


export default function Home() {
    return (
        <>
            <NavBar />
            <HeadSection />
            <Products />
            <AboutUs />
            <Certification />
            <ContactUs />
            <Footer />
        </>
    )
}
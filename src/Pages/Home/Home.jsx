import AboutUs from "../../Components/AboutUs";
import Certification from "../../Components/Certification";
import ContactUs from "../../Components/ContactUs";
import Footer from "../../Components/Footer";
import HeadSection from "../../Components/HeadSection";
import NavBar from "../../Components/NavBar";


export default function Home() {
    return (
        <>
            <NavBar />
            <HeadSection />
            <AboutUs />
            <Certification />
            <ContactUs />
            <Footer />
        </>
    )
}
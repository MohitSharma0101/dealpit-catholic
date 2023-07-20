import AboutUs from "../Components/AboutUs";
import Certification from "../Components/Certification";
import HeadSection from "../Components/HeadSection";
import Products from "../Components/ProductCategory";


export default function Home() {
    return (
        <>
            <HeadSection />
            <Products />
            <AboutUs />
            <Certification />
        </>
    );
};
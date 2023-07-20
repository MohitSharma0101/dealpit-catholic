import { useParams } from "react-router-dom";
import Products from "../Components/Products";

export default function ProductPage() {
    const {category} = useParams();

    return (
        <Products categoryId={category}/>
    );
};
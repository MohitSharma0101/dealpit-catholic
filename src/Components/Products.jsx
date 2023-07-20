import styled from "@emotion/styled";
import ParentWrapper from "./ParentWrapper";
import { useProductsByCategory, useProductsCategoryByName } from "../Utils/AirtableUtils";
import { QUERIES } from "../Utils/MediaQueries";
import { CircularProgress } from "@mui/material";

export default function Products({ categoryId }) {
    const category = useProductsCategoryByName(categoryId);
    const [products, loading] = useProductsByCategory(category?.name);

    return (
        <ParentWrapper>
            <Wrapper>
                <Category>
                    <Category.Image>
                        <img src={(category?.image) ? category?.image[0]?.url : "/images/default-image.svg"} alt={category?.name} />
                    </Category.Image>
                    <Category.Content>
                        <Category.Content.Title>
                            {category?.name}
                        </Category.Content.Title>
                        <Category.Content.Desc>
                            {category?.description}
                        </Category.Content.Desc>
                    </Category.Content>
                </Category>
                <Product.List>
                    {
                        (!loading) ?
                            products.map(product => (
                                <Product product={product} />
                            ))
                            : <CircularProgress sx={{ color: "#80BDCF" }} />
                    }
                </Product.List>
            </Wrapper>
        </ParentWrapper>
    );
};

const Wrapper = styled.section`
    display: flex;
    padding: 68px 0px;
    flex-direction: column;
    align-items: center;
    gap: 52px;

    @media ${QUERIES.mobileOrSmaller} {
        width: 100%;
        padding: 32px 0;
    }
`;

const Category = styled.section`
    display: flex;
    align-items: flex-start;
    gap: 40px;
    align-self: stretch;
    padding-bottom: 24px;
    border-bottom: 1px solid #DBDBDB;

    @media ${QUERIES.mobileOrSmaller} {
        width: 100%;
        flex-direction: column;
        gap: 12px;
    }
`;

Category.Image = styled.div`
    --corners: 12px;
    min-width: 200px;
    max-width: 200px; 
    aspect-ratio: 4/3;
    border-radius: var(--corners); 

    @media ${QUERIES.mobileOrSmaller} {
        width: 100%;
        max-width: 100%;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.3s ease;
        border-radius: var(--corners); 
    }
`;

Category.Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0.625rem;  
`;

Category.Content.Title = styled.div`
    color: #000;
    font-size: 1.6rem;
    font-weight: 700;
`;

Category.Content.Desc = styled.div`
    color: #7C7C7C;
    font-size: 1rem;
    font-weight: 400;
`;

function Product({ product }) {
    console.log(product.name, product.image);
    return (
        <Product.Card>
            <Product.Image>
                <img src={(product.image) ? product?.image[0]?.url : "/images/default-image.svg"} alt={product?.name} />
            </Product.Image>
            <Product.Content>
                {product.name}
            </Product.Content>
        </Product.Card>
    )
}

Product.List = styled.section`
    --card-corners: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    gap: 3.875rem;
    flex-wrap: wrap;

    @media ${QUERIES.mobileOrSmaller} {
        padding: 0 24px;
    }
`;

Product.Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: var(--card-corners, 0.75rem);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    cursor: pointer;
    width: 220px;

    @media ${QUERIES.mobileOrSmaller} {
        width: 100%;
    }
`;

Product.Image = styled.div`
    --corners: 12px;
    aspect-ratio: 5/4;
    overflow: hidden;
    border-radius: var(--corners)  var(--corners) 0 0; 
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.3s ease;
    }
    img:hover{
        transform: scale(1.2);

        @media ${QUERIES.mobileOrSmaller} {
            transform: revert;
        }
    }
`;

Product.Content = styled.div`
    padding: 12px;
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
`;
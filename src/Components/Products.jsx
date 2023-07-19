import styled from "@emotion/styled";
import { Title } from "./AboutUs";
import ParentWrapper from "./ParentWrapper";
import { useProductsCategory } from "../Utils/AirtableUtils";
import { Link } from "@mui/material";

export default function ProductCategory() {
    return (
        <ParentWrapper id="products">
            <Wrapper>
                <Title>
                    Our Offerings
                </Title>
                <Content>
                    <CategoryList />
                </Content>
            </Wrapper>
        </ParentWrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 62px;
    padding: 0 12px;
`;

const Content = styled.section`
    
`;

function CategoryList() {
    const categoryList = useProductsCategory();

    return (
        <CategoryListWrapper>
            {
                categoryList.map((category) => (<Category category={category} />))
            }
        </CategoryListWrapper>
    );
};

const CategoryListWrapper = styled.div`
    width: 100%;
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 24px;
    padding: 24px 0;
`;

function Category({ category }) {
    return (
        <Link href="#" underline="none" color={"black"}>
            <CategoryWrapper>
                <ImageWrapper>
                    <img src={(category?.image) ? category?.image[0]?.url : ""} alt={category?.name} />
                </ImageWrapper>
                <CategoryContent>
                    {category?.name}
                    <GoIcon />
                </CategoryContent>
            </CategoryWrapper>
        </Link>
    );
};

const CategoryWrapper = styled.div`
    --corners: 12px;
    border-radius: var(--corners);
    cursor: pointer;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const ImageWrapper = styled.div`
    width: 295px;
    height: 212px;
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
        }
`;

const CategoryContent = styled.div`
    padding: 12px;
    font-weight: 400;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

const GoIcon = () => {
    return (
        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_4_1556)">
                <path d="M16.5 2.66666L16.932 2.67332C20.429 2.78668 23.7413 4.27005 26.1544 6.80347C28.5676 9.33689 29.8883 12.7173 29.8316 16.2157C29.7749 19.714 28.3454 23.0499 25.8514 25.5038C23.3574 27.9577 19.9988 29.333 16.5 29.333C13.0012 29.333 9.64259 27.9577 7.1486 25.5038C4.65461 23.0499 3.2251 19.714 3.16842 16.2157C3.11173 12.7173 4.4324 9.33689 6.84557 6.80347C9.25875 4.27005 12.571 2.78668 16.068 2.67332L16.5 2.66666ZM17.3173 9.61332C17.0493 9.40611 16.7125 9.30867 16.3753 9.34079C16.0381 9.37291 15.7257 9.5322 15.5017 9.78628C15.2776 10.0404 15.1587 10.3702 15.169 10.7088C15.1794 11.0474 15.3182 11.3694 15.5573 11.6093L18.612 14.6667H11.1667L11.0107 14.676C10.6732 14.7161 10.3638 14.8836 10.1457 15.1442C9.92757 15.4048 9.81719 15.7389 9.8371 16.0781C9.85702 16.4174 10.0057 16.7362 10.2528 16.9695C10.5 17.2028 10.8268 17.3329 11.1667 17.3333H18.612L15.5573 20.3907L15.4467 20.516C15.2395 20.784 15.142 21.1208 15.1741 21.458C15.2063 21.7952 15.3655 22.1076 15.6196 22.3317C15.8737 22.5557 16.2036 22.6746 16.5422 22.6643C16.8808 22.654 17.2027 22.5151 17.4427 22.276L22.776 16.9427L22.8733 16.8333L22.9587 16.7147L23.0413 16.564L23.1 16.4173L23.14 16.268L23.1627 16.1L23.1667 16L23.1573 15.8427L23.1187 15.6453L23.072 15.5053L23 15.3547L22.9053 15.2067C22.8659 15.1538 22.8227 15.1039 22.776 15.0573L17.4427 9.72399L17.3173 9.61332Z" fill="#80BDCF" />
            </g>
            <defs>
                <clipPath id="clip0_4_1556">
                    <rect width="32" height="32" fill="white" transform="translate(0.5)" />
                </clipPath>
            </defs>
        </svg>
    );
};
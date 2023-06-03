import styled from "@emotion/styled";
import ParentWrapper from "./ParentWrapper";
import Image from "./Icon";
import qualityJson from "../json/quality.json"
import savingJson from "../json/saving.json"
import supportJson from "../json/support.json"
import Lottie from "lottie-react";

export default function AboutUs() {
    const cards = [
        {
            name: "Quality Products",
            desc: "We are here to provide the best quality products to our precious customer.",
            icon: qualityJson
        },
        {
            name: "Affordable Price",
            desc: "We are here to provide our products in very affordable price to our valuable clients.",
            icon: savingJson
        },
        {
            name: "Dedicated Support",
            desc: "We would like to help you by providing 24×7 dedicated support to our customer.",
            icon: supportJson
        }
    ]
    return (
        <ParentWrapper id="aboutus">
            <Title>
                About Us
            </Title>
            <Content>
                <Desc>
                    Dealpit Catholic Export Import company founded by Mr.Viviek soni at Indore, India with an aim to own the tag of an ideal supplying company on a global platform. Having a wide portfolio of products, we impressively meet diverse potential buyers needs. We guarantee freshness in our products because instant sourcing, packaging and delivery takes place at our company.
                    We ensure not singularly good quality but also good quantity at thrifty prices as the result of which we effortlessly maintain a list of faithful clients.
                </Desc>
                <Cards>
                    {
                        cards.map((card) => (
                            <Card>
                                <CardIcon>
                                    <Lottie animationData={card.icon} loop />
                                </CardIcon>

                                <Name>{card.name}</Name>
                                <CardDesc>{card.desc}</CardDesc>
                            </Card>
                        ))
                    }
                </Cards>
            </Content>

        </ParentWrapper>
    )
}

export const Title = styled.div`
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1.2rem;
`
const Content = styled.div`
    padding: 30px 98px;
`
const Desc = styled.div`
    font-weight: 300;
    text-align: justify;
`

const Cards = styled.div`
    display: flex;
    justify-content: center;
    margin: 44px 0;
    gap:24px;
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 220px;
    min-height: 150px;
    padding: 16px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
    border-radius: 12px;

`

const Name = styled.div`
    font-size: 1.2rem;
    font-weight: 600;
    margin: 4px 0;
`
const CardDesc = styled.div`
    font-weight: 300;
    margin: 12px 0;
    text-align: center;
`

const CardIcon = styled.div`
    width: 100px;
`
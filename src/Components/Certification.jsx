import { Title } from "./AboutUs";
import ParentWrapper from "./ParentWrapper";
import certificateJson from "../json/verified.json"
import Lottie from "lottie-react";
import styled from "@emotion/styled";


export default function Certification() {
    return (
        <Wrapper>
            <Title>
                We are Certified
            </Title>
            <ContentWrapper>
                <LottieWrapper>
                <Lottie animationData={certificateJson} loop/>
                </LottieWrapper>
            
                <Content>
                We are pleased to inform you that <strong>Dealpit catholic is certified by government of India</strong> <br/>
                according to the following standards and permitted to export our quality products across the world. 
                We are well known for our quality products and our best services like on time delivery and 24×7 support service to customers.
                 We also provide globally export service as per our customer needs and requirements.
                </Content>
            </ContentWrapper>
        </Wrapper>
    )
}

const Wrapper = styled(ParentWrapper)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:24px;
`

const ContentWrapper = styled.div`
    display: flex;
    padding: 30px;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 12px;


`
const LottieWrapper = styled.div`
    width: 300px;
`
const Content = styled.div`
    width: 300px;
    font-weight: 300;

`
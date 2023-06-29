import styled from "@emotion/styled/macro";
import ParentWrapper from "./ParentWrapper";
import EmailIcon from '@mui/icons-material/Email';
import Lottie from "lottie-react";
import shipping from "../json/shipment.json"
import { BREAKPOINT, mq } from "../Utils/MediaQueries";

export default function HeadSection() {
    return (
        <Wrapper>
            <div>
                <TagLine >
                    Delivering Trust and Quality
                    <br />
                    Across Borders
                </TagLine>
                <Description>
                    Discover the excellence of Dealpit Catholic, A government-certified export company
                    committed to supplying top-quality products across the globe.
                </Description>
                <ContactUsBtn onClick={(e) => {
                    const section = document.getElementById("contactus");
                    section.scrollIntoView({ behavior: "smooth" })
                }}>
                    Get in Touch
                    <IconWrapper>
                        <EmailIcon fontSize="small" />
                    </IconWrapper>
                </ContactUsBtn>
            </div>
            <LottieWrapper>
                <Lottie animationData={shipping} loop />
            </LottieWrapper>
        </Wrapper>
    )
}

const Wrapper = styled(ParentWrapper)`
    width: 100%;
    min-height: 400px;
    padding: 0 12px;
    position: relative;
    display: flex;
    justify-content: space-between;
`

const LottieWrapper = styled.div`
    width: 500px;

    ${mq(BREAKPOINT.large)} {
        margin-left: 0;
        display: none;
    }
`
const TagLine = styled.div`
    margin-top: 100px;
    font-size: 2em;
    font-weight: 700;

    ${mq(BREAKPOINT.large)} {
        font-size: 1.4em;
    }
`

const Description = styled.div`
    margin-top: 32px;
`
const IconWrapper = styled.div`
    margin-bottom: -2px;
`

const ContactUsBtn = styled.button`
    padding: 12px 16px;
    font-size: 1rem;
    font-weight: 600;
    background-color: #73a3a7;
    color: #FCFCFC;
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 24px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    transition: all .2s linear;
`

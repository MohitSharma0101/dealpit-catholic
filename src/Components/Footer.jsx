import styled from "@emotion/styled";
import Logo from "./Logo";
import { Facebook, LinkedIn, Twitter } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export default function Footer() {
    return (
        <Wrapper>
            <Logo />
            <Socials>
                <IconButton aria-label="facebook">
                    <Facebook />
                </IconButton>
                <IconButton aria-label="linkedin">
                    <LinkedIn />
                </IconButton>
                <IconButton aria-label="twitter">
                    <Twitter />
                </IconButton>
            </Socials>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    padding: 24px;
    display: flex;
    justify-content: space-between;
`;

const Socials = styled.div`
    display: flex;
    gap:10px;
`;
import styled from "@emotion/styled";
import Logo from "./Logo";
import { Facebook, LinkedIn, Twitter } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import ParentWrapper from "./ParentWrapper";

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

const Wrapper = styled(ParentWrapper)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Socials = styled.div`
    display: flex;
    height: min-content;
    gap:10px;
`;
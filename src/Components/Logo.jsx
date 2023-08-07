import styled from "@emotion/styled"

export default function Logo() {
    return (
        <LogoWrapper href="/">
            <img src={"logo512.jpg"} alt="Dealpit Catholic"/>
        </LogoWrapper>
    )
}

const LogoWrapper = styled.a`
    width: 140px;
    aspect-ratio: 16/9;
    display: flex;
    gap: 8px;
    font-weight: 600;
    cursor: pointer;
`
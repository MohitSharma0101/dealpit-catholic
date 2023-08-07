import styled from "@emotion/styled"
import logo from "../assests/Logo.svg"

export default function Logo() {
    return (
        <LogoWrapper >
            <img src={logo} alt="Dealpit Catholic"/>
            <span>Dealpit Catholic</span>
        </LogoWrapper>
    )
}

const LogoWrapper = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    gap: 8px;
    font-weight: 600;
`
import styled from '@emotion/styled'
import ParentWrapper from './ParentWrapper'
import { Stack } from '@mui/material';
import Logo from './Logo';

export default function NavBar() {
    const links = [{
        id: "aboutus",
        name: "About us",
    }, {
        id: "products",
        name: "Prodcuts"
    }, {
        id: "contactus",
        name: "Contact us"
    }];
    return (
        <ParentWrapper >
            <NavWrapper>
                <Logo />
                <Stack direction="row" spacing={4}>
                    {
                        links.map((link) => (
                            <NavLink onClick={(e) => {
                                const section = document.getElementById(link.id);
                                section.scrollIntoView({ behavior: "smooth" })
                            }}>
                                {link.name}
                            </NavLink>
                        ))
                    }
                </Stack>
            </NavWrapper>
        </ParentWrapper>
    )
}

const NavWrapper = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const NavLink = styled.div`
    color:black;
    cursor: pointer;

`
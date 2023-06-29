import styled from '@emotion/styled'
import ParentWrapper from './ParentWrapper'
import { Stack } from '@mui/material';
import Logo from './Logo';
import { BREAKPOINT, mq } from '../Utils/MediaQueries';

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
                <NavLinks>
                    <Stack direction="row" spacing={4}>
                        {
                            links.map((link, index) => (
                                <NavLink key={index} onClick={(e) => {
                                    const section = document.getElementById(link.id);
                                    section.scrollIntoView({ behavior: "smooth" })
                                }}>
                                    {link.name}
                                </NavLink>
                            ))
                        }
                    </Stack>
                </NavLinks>
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

const NavLinks = styled.div`
    ${mq(BREAKPOINT.large)} {
        display: none;
    }
`

const NavLink = styled.div`
    color:black;
    cursor: pointer;

`
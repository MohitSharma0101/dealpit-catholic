import { useState } from 'react';
import styled from '@emotion/styled'
import ParentWrapper from './ParentWrapper'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Logo from './Logo';
import { BREAKPOINT, mq } from '../Utils/MediaQueries';
import { NavLink } from "react-router-dom";


const links = [
    {
        id: "/",
        name: "Home",
    },
    {
        id: "products",
        name: "Prodcuts"
    },
    {
        id: "aboutus",
        name: "About us",
    }, {
        id: "contactus",
        name: "Contact us"
    }
];

export default function NavBar() {
    const getNavLinkProps = (link) => {
        if (link.id === "contactus") return {
            onClick:(e) => {
                const section = document.getElementById(link.id);
                section?.scrollIntoView({ behavior: "smooth" })
            }
        }
        return {to:`${link.id}`}
    }
    return (
        <ParentWrapper>
            <NavWrapper>
                <Logo />
                <NavMenuButton getNavLinkProps={getNavLinkProps} />
                <NavLinks>
                    {
                        links.map((link) => (
                            <StyledNavLink
                                key={link.id}
                                {...getNavLinkProps(link)}
                                >
                                {link.name}
                            </StyledNavLink>
                        ))
                    }
                </NavLinks>
            </NavWrapper>
        </ParentWrapper>
    );
};

const NavWrapper = styled.nav`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const NavLinks = styled.ul`
    display: flex;
    gap: 18px;

    ${mq(BREAKPOINT.small)} {
        display: none;
    }
`;

const StyledNavLink = styled(NavLink)`
    color:black;
    cursor: pointer;
    list-style-type: none;
    position: relative;
    padding: 8px 0;
    text-decoration: none;

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #73a3a7;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
        transform: scaleX(0);
    }

    &:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
`;

const NavMenuButton = ({getNavLinkProps}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    }
    const onMenuClick = (link) => {
        handleClose();
        const section = document.getElementById(link.id);
        section?.scrollIntoView({ behavior: "smooth" })
    };

    return (
        <MenuWrapper>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MenuRoundedIcon sx={{ color: 'black' }} />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {
                    links.map((link) => (
                        <MenuItem key={link.id} onClick={(e) => {
                            onMenuClick(link);
                        }}>
                             <StyledNavLink
                                key={link.id}
                                {...getNavLinkProps(link)}
                                >
                                {link.name}
                            </StyledNavLink>
                        </MenuItem>
                    ))
                }
            </Menu>
        </MenuWrapper>
    );
};

const MenuWrapper = styled.div`
    display: none;
    ${mq(BREAKPOINT.small)} {
        display: block;
    }
`;
import React from 'react'
import { AppBar, Toolbar, Typography, Tabs, Tab, Button, useTheme, useMediaQuery } from '@mui/material'
import { NavbarWrapper } from '../styles/Header.modules'
import DrawerContainer from './DrawerContainer'

export const menuItems = [
    { name: "Home" },
    { name: "Now playing" },
    { name: "Popular" },
    { name: "TV Shows" }
]

const Header = () => {

    const themes = useTheme();
    const isMatching = useMediaQuery(themes.breakpoints.down("md"));

    return (
        <NavbarWrapper>
            <AppBar sx={{ padding: "10px", backgroundColor: "#063970" }}>
                <Toolbar>

                    <Typography className='logo'>Cinematic</Typography>
                    {isMatching ? (
                        <DrawerContainer />
                    ) : (
                        <>
                            <div className='navLinks'>
                                {menuItems.map((nav, idx) => (
                                    <Tab className='Links' label={nav.name} key={idx} />
                                ))}
                            </div>
                            <Button className='loginBtn' variant='contained' color='info'>Login</Button>
                        </>
                    )}

                </Toolbar>
            </AppBar>
        </NavbarWrapper>
    )
}

export default Header
import React from 'react'
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { menuItems } from './Header';
import MenuIcon from "@mui/icons-material/Menu";

const DrawerContainer = () => {

    const [openDrawer, setOpenDrawer] = React.useState(false);

    const drawerBtn = () => {
        setOpenDrawer(!openDrawer);
    }

    return (
        <>
            <Drawer open={openDrawer} onClose={drawerBtn} anchor='left'>
                <List>
                    {menuItems.map((nav, idx) => (
                        <ListItemButton onClick={() => setOpenDrawer(false)} key={idx}>
                            <ListItemIcon>
                                <ListItemText sx={{ color: "blue" }}>
                                    {nav.name}
                                </ListItemText>
                            </ListItemIcon>
                        </ListItemButton>
                    ))}
                </List>
            </Drawer>
            <IconButton sx={{ marginleft: "auto", color: "whitesmoke" }} onClick={drawerBtn}>
                <MenuIcon />
            </IconButton>
        </>
    )
}

export default DrawerContainer
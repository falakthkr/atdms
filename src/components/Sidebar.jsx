import * as React from 'react';
import { Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Drawer, Box } from '@mui/material';
import { Assessment, Call, EventNote, Menu, People, Person, PersonSearch, Speed, ExpandLess, ExpandMore } from '@mui/icons-material';
import "./css/sidebar.css";
import Image from "../assets/atdms_logo.png";

export default function Sidebar() {
    const [open, setOpen] = React.useState(false);
    const [openProfiles, setOpenProfiles] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    const handleClickProfiles = () => {
        setOpenProfiles(!openProfiles);
    };
    const list = () => (
        <Box
            role="presentation"
        >
            <List>
                <ListItem>
                    <img alt="logo" src={Image} />
                </ListItem>
            </List>
            <List>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <Menu />
                        </ListItemIcon>
                        <ListItemText primary="Hide Menu" />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <Speed />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton onClick={handleClick}>
                        <ListItemIcon>
                            <PersonSearch />
                        </ListItemIcon>
                        <ListItemText primary="Projects" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText primary="Item One" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText primary="Item Two" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText primary="Item Three" />
                        </ListItemButton>
                    </List>
                </Collapse>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <Person />
                        </ListItemIcon>
                        <ListItemText primary="Out Patient Services" />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton onClick={handleClickProfiles}>
                        <ListItemIcon>
                            <People />
                        </ListItemIcon>
                        <ListItemText primary="Profiles" />
                        {openProfiles ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                </ListItem>
                <Collapse in={openProfiles} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText primary="Item One" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText primary="Item Two" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText primary="Item Three" />
                        </ListItemButton>
                    </List>
                </Collapse>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <EventNote />
                        </ListItemIcon>
                        <ListItemText primary="Program Timelines" />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <Call />
                        </ListItemIcon>
                        <ListItemText primary="Inquiries" />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <Assessment />
                        </ListItemIcon>
                        <ListItemText primary="Reports" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <div id="sidebarBgColor"  style={{ flex: '1 auto' }}>
            <React.Fragment key="left">
                <Drawer
                    anchor="left"
                    open={true}
                    variant="permanent"
                >
                    {list("left")}
                </Drawer>
            </React.Fragment>
        </div>
    );
}
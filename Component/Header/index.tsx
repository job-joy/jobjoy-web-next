import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Avatar, Tooltip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";

import Link from "next/link";

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };

  const toggleDrawer = (open:any) => (event:any) => {
    if (
      event.type === "type" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpenDrawer(open);
  };

  const aaa =(id:any)=> (event:any)=>{
    console.log('id: ', id);
    console.log('event: ', event);
    console.log('hi');
  }
  
const id = 5
  return (
    <>
      <AppBar position="static">
        <Toolbar style={{ background: "rgba(143, 88, 73, 1)" }}>
          <Tooltip title="Open settings">
            <IconButton>
              <Link href="/profile">
                <Avatar alt="Remy Sharp" />
              </Link>
            </IconButton>
          </Tooltip>
          <Typography variant="h6" noWrap component="div" style={{ flex: 1 }}>
            JobJoy
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={aaa(id)}
          >
            {/* <MenuIcon onClick={handleOpenDrawer} /> */}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor={"right"}
        open={openDrawer}
        onClose={toggleDrawer(false)}
        // onOpen={toggleDrawer(true)}
      >
        <List style={{ padding: 20 }}>
          {["PROFILE"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};
export default Header;

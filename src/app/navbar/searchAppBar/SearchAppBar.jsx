"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { IoIosMenu } from "react-icons/io";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Drawer from "../drawer/Drawer";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { Search, SearchIconWrapper, StyledInputBase } from "./SearchAppStyle";
export default function SearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuId = "primary-search-account-menu";

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        className="bg-[--primary_bg] text-[--body_text]"
      >
        <Drawer toggleDrawer={toggleDrawer} state={state} />
        <Toolbar>
          <Image
            src="/logo_black_text.png"
            alt="Nursing Insights"
            width={100}
            height={100}
          />
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
          >
            <div className="search_container w-[20px] h-[20px]">
              <FaSearch />{" "}
            </div>
          </IconButton>

          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
            className="mx-2 "
          >
            <RxAvatar />

            {/* <Image alt="vercel" src="/vercel.svg" width={40} height={40} /> */}
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer("left", true)}
          >
            <IoIosMenu />
          </IconButton>
        </Toolbar>
      </AppBar>
      <AccountMenu
        anchorEl={anchorEl}
        menuId={menuId}
        setAnchorEl={setAnchorEl}
      />
    </Box>
  );
}

function AccountMenu({ anchorEl, menuId, setAnchorEl }) {
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );
}

"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { IoIosMenu } from "react-icons/io";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Drawer from "../drawer/Drawer";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import NavList from "../component/navlist/NavList";
import Link from "next/link";
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
        className="bg-[--primary_bg] text-[--body_text] navbar"
      >
        <Drawer toggleDrawer={toggleDrawer} state={state} />
        <Toolbar>
          <Link href={""}>
            <Image
              src="/logo_black_text.png"
              alt="Nursing Insights"
              width={100}
              height={100}
            />
          </Link>
          <Box sx={{ flexGrow: 1 }}>
            <NavList drawer={false} />
          </Box>
          <div className="nav_icons_container flex justify-center items-center gap-1">
            <IconButton
              size="medium"
              edge="end"
              aria-label="Search for a course"
              aria-haspopup="true"
              color="inherit"
            >
              <FaSearch />{" "}
            </IconButton>
            <IconButton
              size="medium"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <RxAvatar />

              {/* <Image alt="vercel" src="/vercel.svg" width={40} height={40} /> */}
            </IconButton>
            <IconButton
              className="lap:hidden"
              size="medium"
              edge="end"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer("left", true)}
            >
              <IoIosMenu />
            </IconButton>
          </div>
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

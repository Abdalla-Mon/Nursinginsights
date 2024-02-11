"use client";
import Link from "next/link";
import { List, ListItem, ListItemButton } from "@mui/material";
import { motion } from "framer-motion";
import { RiMenu2Line } from "react-icons/ri";
import * as React from "react";

const menuItems = [
  { name: "courses", icon: "", path: "courses" },
  { name: "quizzes", icon: "", path: "quizzes" },
];
export default function DashMenu({}) {
  return (
    <>
      <Menu />
    </>
  );
}

export function MobileMenu({ drawer, setDrawer }) {
  const animationProps = {
    initial: { x: -300 },
    animate: { x: drawer ? 0 : -300 },
    transition: { duration: 0.5 },
  };
  return (
    <motion.div
      className={"tab:hidden w-full h-full absolute top-0 left-0  "}
      animate={drawer ? { zIndex: 10 } : { zIndex: -100, opacity: 0 }}
      onClick={() => setDrawer(false)}
      transition={
        !drawer
          ? { zIndex: { delay: 0.5 }, duration: 0 }
          : { zIndex: { delay: 0 }, duration: 0 }
      }
    >
      <motion.div
        className={" tab:hidden z-40 relative w-[300px]  overflow-hidden"}
        {...animationProps}
      >
        <Menu style={"tab:hidden"} />
      </motion.div>
    </motion.div>
  );
}

function Menu({ style = "hidden tab:block" }) {
  return (
    <div className={" relative tab:w-[240px] " + style}>
      <List
        className={
          "tab:w-[240px] min-h-[400px] border rounded-xl p-6 dash_menu sticky  top-[30px] bg-[#f9f9f9]"
        }
      >
        {menuItems.map((item) => (
          <MenuItem
            key={item.name}
            name={item.name}
            icon={item.icon}
            path={item.path}
          />
        ))}
      </List>
    </div>
  );
}

function MenuItem({ name, icon, path }) {
  return (
    <ListItem disablePadding className={"list_item text-[16px]"}>
      <Link href={"/dashboard/" + path} className={"flex w-full pc_item"}>
        <ListItemButton>
          <div className={"text_div"}>{name}</div>
        </ListItemButton>
      </Link>
    </ListItem>
  );
}

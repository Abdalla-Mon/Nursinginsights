import Link from "next/link";
import data from "../../db/navbar.json";
import {IoChevronDown} from "react-icons/io5";
import {motion} from "framer-motion";
import {List, ListItem, ListItemButton,} from "@mui/material";
import React from "react";

export default function NavList({drawer}) {
  const {navList} = data;
  const [expanded, setExpanded] = React.useState("");
  if (drawer) {
    return (
      <div className={"nav_list"}>
        <List>
          {navList.map((item, index) => (
            <ListItem
              className="list_item"
              key={item.name + index}
              disablePadding
            >
              <Item
                item={item}
                expanded={expanded}
                setExpanded={setExpanded}
                drawer={drawer}
              />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
  return (
    <div className="">
      <List className="hidden lap:flex gap-3 justify-center pc_list z-50">
        {navList.map((item, index) => (
          <ListItem className={""} key={item.name + index} disablePadding>
            <Item
              item={item}
              pc={true}
              expanded={expanded}
              setExpanded={setExpanded}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export function Item({item, pc, expanded, setExpanded}) {
  if (!item.subfields) {
    return (
      <>
        <SubItem href={item.href} item={item.name}/>
      </>
    );
  }
  return (
    <ListItemButton
      onMouseEnter={() => {
        pc && setExpanded(item.name);
      }}
      onMouseLeave={() => {
        pc && setExpanded("");
      }}
      onClick={() => {
        if (!pc) {
          setExpanded(item.name);
          if (item.name === expanded) {
            setExpanded("");
          }
        }
      }}
      className="flex flex-col pc_item "
    >
      <Link href={"/"} onClick={(e) => e.preventDefault()} className="w-full">
        <div className="flex justify-between w-full gap-1 items-center ">
          <div className="capitalize text_div  w-full">{item.name}</div>
          <motion.div
            initial={{rotateZ: 0}}
            animate={expanded === item.name ? {rotateZ: -90} : {rotateZ: 0}}
          >
            <IoChevronDown/>
          </motion.div>
        </div>
      </Link>
      <SubfieldsContainer item_data={item} expanded={expanded}/>
    </ListItemButton>
  );
}

function SubfieldsContainer({item_data, expanded}) {
  const cat= (subitem)=> "?category=" + subitem.replace(" ", "_")
  return (
    <motion.div
      className="w-full overflow-hidden sub_list_item  "
      initial={{height: 0}}
      animate={expanded === item_data.name ? {height: "auto"} : {height: 0}}
    >
      <List className="pl-3 lap:px-3 sub_list">
        {item_data.subfields.map((subitem, index) => (
          <ListItem
            className={"sub_item"}
            key={subitem}
            disablePadding
            style={{
              borderBottom: index === item_data.subfields.length - 1 && "none",
            }}
          >
            <SubItem
              item={subitem}
              key={subitem}
              href={item_data.href +( subitem!=="all"? cat(subitem):"")}
              padding={"py-[2px]"}
            />{" "}
          </ListItem>
        ))}
      </List>
    </motion.div>
  );
}

function SubItem({item, href, padding}) {
  href = href.replace(/\s/g, "");
  return (
    <Link href={href} className="block w-full pc_item">
      <ListItemButton>
        <div className={"text_div " + padding}>{item}</div>
      </ListItemButton>
    </Link>
  );
}

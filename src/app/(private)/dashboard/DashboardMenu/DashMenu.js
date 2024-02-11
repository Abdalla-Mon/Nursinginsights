import Link from "next/link";
import {List, ListItem, ListItemButton, ListItemText} from "@mui/material";

const menuItems = [
  {name: "courses", icon: "", path: "courses"},
  {name: "quizzes", icon: "", path: "quizzes"},
]
export default function DashMenu({showList}) {
  return (
    <div className={"relative tab:w-[240px]"}>

      <List
        className={"tab:w-[240px] min-h-[400px] border rounded-xl p-6 dash_menu sticky  top-[30px] bg-[#f9f9f9]"}
      >
        {menuItems.map((item) => (
          <MenuItem key={item.name} name={item.name} icon={item.icon} path={item.path}/>
        ))
        }
      </List>
    </div>
  )
}

function MenuItem({name, icon, path}) {
  return (
    <ListItem disablePadding className={"list_item text-[16px]"}>
      <Link href={"/dashboard/" + path} className={"flex w-full pc_item"}>
        <ListItemButton>
          <div className={"text_div"}>
            {name}
          </div>
        </ListItemButton>
      </Link>
    </ListItem>
  )
}
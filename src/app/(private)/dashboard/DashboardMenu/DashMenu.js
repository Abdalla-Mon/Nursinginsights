import Link from "next/link";

const menuItems = [
    {name: "courses", icon: "", path: "courses"},
    {name: "quizzes", icon: "", path: "quizzes"},
]
export default function DashMenu() {
    return (
        <div>{
            menuItems.map((item) => (
                <MenuItem key={item.name} name={item.name} icon={item.icon} path={item.path}/>
            ))
        }
        </div>
    )
}

function MenuItem({name, icon, path}) {
    return (
        <div>
            <Link href={"/dashboard/" + path}>
                {name}
            </Link>
        </div>
    )
}
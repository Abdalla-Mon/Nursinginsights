import DashMenu from "@/app/(private)/dashboard/DashboardMenu/DashMenu";

export default function DashboardLayout({children}) {
    return (
        <section className="responsive_height">
            <div className={"container mx-auto"}>

                <DashMenu/>
                {children}
            </div>
        </section>
    );
}
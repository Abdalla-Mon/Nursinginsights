import DashMenu from "@/app/(private)/dashboard/DashboardMenu/DashMenu";

export default function DashboardLayout({ children }) {
  return (
    <section className="responsive_height">
      <Background />
      <div className={"container mx-auto"}>
        <div className={"flex flex-row gap-6 p-5 py-10 justify-center"}>
          <DashMenu />
          <div className={"tab:w-[70%]"}>{children}</div>
        </div>
      </div>
    </section>
  );
}

function Background() {
  return (
    <div
      className={"w-full h-[25vh] banner relative"}
      style={{
        background:
          "linear-gradient(270deg, var(--color_secondary) 0%, var(--color_primary) 100%) ",
      }}
    ></div>
  );
}

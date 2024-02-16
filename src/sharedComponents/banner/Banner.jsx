export default function Banner({ children }) {
  return (
    <div className={"shared_banner banner relative "}>
      <div className={"container mx-auto"}>{children}</div>
    </div>
  );
}

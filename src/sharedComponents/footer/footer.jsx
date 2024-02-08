import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="img-container ">
        <Image
          src="/face-port-1.png"
          alt="Abdalla Abdelsabour"
          width={100}
          height={100}
        />
      </div>{" "}
      <p className="mt-1">
        Made with love by{" "}
        <Link href={"https://abdalla-webportfolio.vercel.app/"}>Abdalla</Link>
      </p>
    </footer>
  );
}

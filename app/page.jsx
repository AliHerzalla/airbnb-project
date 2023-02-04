import Header from "../components/Header";
import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <div className="h-[100vh] bg-white text-black">
      <Header />
      <Banner />
    </div>
  );
}

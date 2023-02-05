import Header from "../components/Header";
import Image from "next/image";
import Banner from "../components/Banner";
import { BaseURL, fetchApi } from "@/src/utils/fetchApi";

export default function Home(data) {
  console.log(data);
  return (
    <div className="h-[100vh] bg-white text-black">
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="font-semibold pb-5 text-4xl">Explore Nearby</h2>
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps(ctx) {
  const data = await fetch("https://www.jsonkeeper.com/b/4G1G").then((res) => {
    console.log(res);
    return res.json();
  });

  return {
    props: { data },
  };
}

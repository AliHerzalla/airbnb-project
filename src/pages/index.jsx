import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import { Footer } from "../components/Footer";

export default function Home({ data, cardData }) {
  return (
    <div className="min-h-[100vh] bg-white text-black">
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="font-semibold pb-5 text-4xl">Explore Nearby</h2>
          <div
            className="grid grid-cols-1 sm:grid-cols-2
          lg:grid-cols-3 xl:grid-cols-4"
          >
            {data?.map((item, index) => (
              <SmallCard key={index} {...item} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-semibold py-8 text-4xl">Live Anywhere</h2>
          <div className="flex overflow-y-hidden p-3 space-x-4 -ml-3">
            {cardData?.map((item, index) => (
              <MediumCard key={index} {...item} />
            ))}
          </div>
        </section>

        <section>
          <LargeCard
            img="https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440"
            title="The Greatest Outdoors"
            description="Wishlists curated by Airbnb."
            buttonText="Get Inspired"
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const data = await fetch("https://www.jsonkeeper.com/b/4G1G").then((res) =>
    res.json()
  );

  const cardData = await fetch("https://www.jsonkeeper.com/b/3MVB").then(
    (res) => res.json()
  );

  return {
    props: { data, cardData },
  };
}

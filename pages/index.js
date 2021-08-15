import Head from "next/head";
import Header from "../components/HeaderHome";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";
import Image from "next/image"
export default function Home({ exploreData,cardsData }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-airbnb bg-no-repeat bg-cover bg-fixed">
      <Header />
      <Banner /></div>
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {exploreData?.map((item) => (
            <SmallCard
              key={item.img}
              img={item.img}
              location={item.location}
              distance={item.distance}
            />
          ))}</div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-4">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-2">
          {cardsData?.map((item) => (
            <MediumCard
              key={item.img}
              img={item.img}
              title={item.title}
            />
          ))}</div>
        </section>
        <section>
          <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb"
          buttonText="Get inspired"
          
          /> 
        </section>
      </main>
      <Footer/>
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://jsonkeeper.com/b/4G1G").then((res) =>
    res.json()
  );
  const cardsData = await fetch("https://jsonkeeper.com/b/VHHT").then((res) =>
  res.json()
);
  return {
    props: {
      exploreData: exploreData,
      cardsData: cardsData,
    },
  };
}

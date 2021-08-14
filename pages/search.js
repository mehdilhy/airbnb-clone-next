import {React,useState} from "react";
import Header from "../components/HeaderDefault";
import Footer from "../components/Footer";
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";
import Image from "next/image";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";
import { Button } from "@chakra-ui/button";

function Search({searchResults}) {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;
  const formatedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formatedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formatedStartDate} - ${formatedEndDate}`;
  const [mapState,setMapState]=useState("hidden")

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests}`}/>
      <Button onClick={()=>setMapState("")}>Show Map</Button>
      <Button onClick={()=>setMapState("hidden")}>Hide Map</Button>
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          {noOfGuests == 1 ? (
            <p className="text-xs">
              300+ Stays - {range} - for {noOfGuests} guest{" "}
            </p>
          ) : (
            <p className="text-xs">
              300+ Stays - {range} - for {noOfGuests} guests{" "}
            </p>
          )}
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of place</p>{" "}
            <p className="button">Price</p>{" "}
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>
          <div className="flex flex-col">
          {searchResults.map(({img,location,title,description,star,price,total})=>(
              <InfoCard
              key={img}
              img={img}
              location={location}
              title={title}
              description={description}
              star={star}
              price={price}
              total={total}
              />
          ))}</div>
        </section>
        <section className={`${mapState} lg:inline-flex lg:min-w-[600px]`}>
          <Map searchResults={searchResults}/>
        </section>
      </main>
      <Footer />
    </div>
  );
}
export async function getServerSideProps(){
    const searchResults = await fetch("https://jsonkeeper.com/b/5NPS").then((res)=>res.json())
    return {
      props:{
        searchResults,
      }
    }
  }
export default Search;

"use client";
import Button from "@/src/components/Button";
import { Footer } from "@/src/components/Footer";
import Header from "@/src/components/Header";

import React from "react";
import { useRouter } from "next/router";
import { format } from "date-fns";
import InfoCard from "@/src/components/InfoCard";
import MapUI from "../../components/MapUI"

const Search = ({ data }) => {
  const router = useRouter();
  const { location, startDate, endDate, numOfPersons } = router.query;
  const formateStartDate =
    startDate && format(new Date(startDate), `dd/MMMM/yy`);
  const formateEndDate = endDate && format(new Date(endDate), "dd/MMMM/yy");
  const range = `${formateStartDate} - ${formateEndDate}`;

  return (
    <div className="bg-white h-full flex flex-col">
      <Header placeholder={`${location} | ${range} | ${numOfPersons} guests`} />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-black text-xs">
            300+ Stays - {range} - for {numOfPersons} guests
          </p>
          <h1 className="text-black text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <Button classStyle={"button"} title={"Cancellation Flexibility"} />
            <Button classStyle={"button"} title={"Type of Place"} />
            <Button classStyle={"button"} title={"Price"} />
            <Button classStyle={"button"} title={"Rooms and Beds"} />
            <Button classStyle={"button"} title={"More filters"} />
          </div>
          <div className="flex flex-col">
            {data.map((item, index) => (
              <InfoCard {...item} key={index} />
            ))}
          </div>
        </section>

        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <MapUI />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Search;

export const getServerSideProps = async (ctx) => {
  try {
    const response = await fetch("https://www.jsonkeeper.com/b/I7GN");
    const data = await response.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        data: null,
      },
    };
  }
};

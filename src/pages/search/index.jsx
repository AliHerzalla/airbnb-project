import Button from "@/src/components/Button";
import { Footer } from "@/src/components/Footer";
import Header from "@/src/components/Header";
import React from "react";

const Search = () => {
  return (
    <div className="bg-white h-screen flex flex-col">
      <Header />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-black text-xs">
            300+ Stays for 5 number of guests
          </p>
          <h1 className="text-black text-3xl font-semibold mt-2 mb-6">
            Stays in Mars
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <Button classStyle={"button"} title={"Cancellation Flexibility"} />
            <Button classStyle={"button"} title={"Type of Place"} />
            <Button classStyle={"button"} title={"Price"} />
            <Button classStyle={"button"} title={"Rooms and Beds"} />
            <Button classStyle={"button"} title={"More filters"} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Search;

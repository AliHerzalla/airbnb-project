import React from "react";
import Image from "next/image";

const MediumCard = ({ img, title }) => {
  return (
    <div className="cursor-pointer hover:scale-105 transition duration-300 transform ease-out">
      <div className="relative h-72 w-72 scroll-smooth">
        <Image src={img} alt={title} fill={true} className="rounded-xl" />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
};

export default MediumCard;

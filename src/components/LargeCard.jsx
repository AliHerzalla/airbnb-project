import Image from "next/image";
import React from "react";

const LargeCard = ({ img, title, description, buttonText }) => {
  return (
    <div className="py-16 relative cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          alt={title}
          fill={true}
          className="object-cover rounded-2xl"
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="w-64 text-4xl mb-3">{title}</h3>
        <p>{description}</p>
        <button className="bg-gray-900 text-white py-2 px-4 rounded-lg mt-5">{buttonText}</button>
      </div>
    </div>
  );
};

export default LargeCard;

import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        alt="Logo"
        style={{
          objectFit: "cover",
        }}
        fill={true}
      />
      <div className="absolute top-[50%] w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
        <button className="my-3 px-10 py-4 bg-white text-purple-500 rounded-full shadow-md font-bold hover:shadow-lg duration-150 transition active:scale-90">
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;

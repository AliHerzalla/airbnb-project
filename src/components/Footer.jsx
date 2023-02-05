export const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-14 md:px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p className="cursor-pointer w-fit">How Airbnb works</p>
        <p className="cursor-pointer w-fit">Newsroom</p>
        <p className="cursor-pointer w-fit">Investors</p>
        <p className="cursor-pointer w-fit">Airbnb Plus</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p className="cursor-pointer w-fit">Accessibility</p>
        <p className="cursor-pointer w-fit">This is not a real site</p>
        <p className="cursor-pointer w-fit">Its a pretty awesome clone</p>
        <p className="cursor-pointer w-fit">Idk</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p className="cursor-pointer w-fit">Diego Loyola</p>
        <p className="cursor-pointer w-fit">Presents</p>
        <p className="cursor-pointer w-fit">Join Now</p>
        <p className="cursor-pointer w-fit">React Lover</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p className="cursor-pointer w-fit">Help Center</p>
        <p className="cursor-pointer w-fit">Trust & Safety</p>
        <p className="cursor-pointer w-fit">Easter Eggs</p>
        <p className="cursor-pointer w-fit">For the win</p>
      </div>
    </div>
  );
};

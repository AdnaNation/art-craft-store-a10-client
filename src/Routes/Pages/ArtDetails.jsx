import { IoIosStarHalf } from "react-icons/io";
import { useLoaderData } from "react-router-dom";

const ArtDetails = () => {
  const art = useLoaderData();
  console.log(art);
  return (
    <div className="min-h-screen">
      <div className="card bg-base-100 shadow-xl py-2 space-y-2">
        <figure className="p-2 md:p-4">
          <img
            src={art.image}
            alt={art.subcategory_Name}
            className="rounded-2xl lg:w-3/4 md:w-full h-[300px] md:h-[500px]  md:mx-5 lg:mx-20"
          />
        </figure>

        <div className="text-center space-y-2">
          <p className="flex items-center text-xl font-semibold justify-center">
            <span className="border border-sky-300 rounded-lg mr-4 py-2 px-4">
              {art.price}$
            </span>
            <span className="border border-sky-300 rounded-lg py-2 px-3 flex items-center">
              {art.rating}
              <IoIosStarHalf></IoIosStarHalf>
            </span>
          </p>
          <h3 className="text-2xl md:text-3xl font-platypi">{art.item_name}</h3>
          <h4 className="font-semibold text-gray-500 text-sm">
            {art.subcategory_Name}
          </h4>
          <p className="text-gray-500">{art.short_description}</p>
        </div>
        <div className="flex justify-around border-t border-b bg-sky-300 bg-opacity-45 mx-6 rounded-md font-medium">
          <p>Customization: {art.customization}</p>
          <p>Stock Status: {art.stockStatus}</p>
        </div>
      </div>
    </div>
  );
};

export default ArtDetails;

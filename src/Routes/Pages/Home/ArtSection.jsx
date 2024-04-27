import { ImImage } from "react-icons/im";
const ArtSection = ({ art }) => {
  console.log(art);
  return (
    <div>
      <div className="card bg-base-100 shadow-xl py-2">
        <div className="flex items-center justify-start gap-4 pr-4">
          <div>
            <ImImage className="text-4xl text-sky-500"></ImImage>
          </div>
          <div>
            <h2 className="text-center text-xl font-bold">
              {art.subcategory_Name}
            </h2>
            <div className="flex justify-between text-sky-500 text-sm">
              <p>Price: {art.price}$</p> <p>Rating: {art.rating}</p>
            </div>
          </div>
        </div>
        <figure className="p-4">
          <img
            src={art.image}
            alt={art.subcategory_Name}
            className="rounded-xl w-full h-[250px] "
          />
        </figure>
        <button className="text-sky-500 border-sky-500 bg-white mx-4 btn">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ArtSection;

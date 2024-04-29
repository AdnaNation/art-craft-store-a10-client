import { ImImage } from "react-icons/im";
import { Link, useLoaderData } from "react-router-dom";

const AllArtItems = () => {
  const allArt = useLoaderData();
  console.log(allArt);
  return (
    <div className="min-h-screen">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allArt.map((art) => (
          <div key={art._id} className="card bg-base-100 shadow-xl py-2">
            <div className="flex items-center justify-start gap-4 pl-4">
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
            <figure className="p-2 md:p-4">
              <img
                src={art.photo}
                alt={art.subcategory_Name}
                className="rounded-xl w-full h-[250px] "
              />
            </figure>
            <Link
              to={`/artAndCraft/${art._id}`}
              className="text-sky-500 border-sky-500 bg-white mx-4 btn"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllArtItems;

import { useContext } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { ImImage } from "react-icons/im";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const MyArt = () => {
  const { user } = useContext(AuthContext);
  const userId = user?.uid;
  const allArts = useLoaderData();
  const myArts = allArts.filter((art) => art.uid === userId);
  console.log(myArts);
  return (
    <div className="min-h-screen">
      {myArts.length === 0 && (
        <p className="text-center text-2xl font-bold font-serif mt-8">
          Please add your Art first
        </p>
      )}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {myArts.map((art) => (
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
            <div className=" mx-4 border p-2 border-sky-300 rounded-md text-sky-500 font-bold text-sm space-y-2">
              <div className="flex justify-between">
                <p>Customization: {art.customization}</p>
                <p>Stock Status: {art.stockStatus}</p>
              </div>
              <div className="flex justify-evenly text-2xl">
                <button className="text-red-500">
                  <AiOutlineDelete />
                </button>
                <button className="text-orange-500">
                  <FaRegEdit />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyArt;

import { useContext, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { ImImage } from "react-icons/im";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const MyArt = () => {
  const { user } = useContext(AuthContext);
  const userId = user?.uid;
  const allArts = useLoaderData();
  const loadedArts = allArts.filter((art) => art.uid === userId);
  const [myArts, setMyArts] = useState(loadedArts);
  const [filteredArt, setFilteredArt] = useState(loadedArts);

  const handleFilter = (filter) => {
    if (filter === "all") {
      setFilteredArt(myArts);
    } else if (filter === "yes") {
      const customizationYes = myArts.filter(
        (art) => art.customization === "yes"
      );
      setFilteredArt(customizationYes);
    } else if (filter === "no") {
      const customizationNo = myArts.filter(
        (art) => art.customization === "no"
      );

      setFilteredArt(customizationNo);
    }
  };

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://art-and-craft-store-server-omega.vercel.app/allArt/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Art has been deleted.", "success");
              const remaining = myArts.filter((art) => art._id !== id);

              setMyArts(remaining);
              setFilteredArt(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="min-h-screen">
      <div className="flex justify-center">
        <details className="dropdown">
          <summary className=" btn  text-white bg-sky-500">
            Sort By Customization
            <RiArrowDropDownLine className="text-2xl"></RiArrowDropDownLine>
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={() => handleFilter("all")}>
              <a>All</a>
            </li>
            <li onClick={() => handleFilter("yes")}>
              <a>Yes</a>
            </li>
            <li onClick={() => handleFilter("no")}>
              <a>No</a>
            </li>
          </ul>
        </details>
      </div>

      {filteredArt.length === 0 && (
        <p className="text-center text-2xl font-bold font-serif mt-8">
          Please add your Art first
        </p>
      )}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArt.map((art) => (
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
                <Link to={`/updateArt/${art._id}`}>
                  <button className="text-orange-500">
                    <FaRegEdit />
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(art._id)}
                  className="text-red-500"
                >
                  <AiOutlineDelete />
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

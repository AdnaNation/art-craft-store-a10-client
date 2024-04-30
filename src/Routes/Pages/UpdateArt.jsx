import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateArt = () => {
  const art = useLoaderData();
  console.log(art);
  const handleUpdateArt = (e) => {
    e.preventDefault();
    const form = e.target;
    const item_name = form.artName.value;
    const subcategory_Name = form.subcategoryName.value;
    const shortDescription = form.shortDescription.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customizable.value;
    const processing_time = form.processingTime.value;
    const stockStatus = form.stockStatus.value;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;

    const updatedArt = {
      item_name,
      subcategory_Name,
      shortDescription,
      price,
      rating,
      customization,
      processing_time,
      stockStatus,
      name,
      email,
      photo,
    };
    console.log(updatedArt);

    // send data to the server
    fetch(
      `https://art-and-craft-store-server-omega.vercel.app/allArt/${art._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedArt),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Your Art Updated Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };
  return (
    <div className="min-h-screen">
      <div className="bg-sky-200 bg-opacity-75 p-2 md:p-6 md:w-3/4 lg:w-2/4 mx-auto rounded-md mt-10">
        <h2 className="text-3xl font-extrabold font-platypi text-center underline">
          Update Your Art
        </h2>
        <form onSubmit={handleUpdateArt}>
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2 w-full">
              <label className="label">
                <span className="label-text">Art Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="artName"
                  defaultValue={art.item_name}
                  placeholder="Art Name"
                  required
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text">Subcategory Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="subcategoryName"
                  defaultValue={art.subcategory_Name}
                  placeholder="Subcategory Name"
                  required
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="shortDescription"
                  defaultValue={art.shortDescription}
                  placeholder="Short Description"
                  required
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="price"
                  defaultValue={art.price}
                  placeholder="Price"
                  required
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Rating (Out of 5.00)</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="rating"
                  defaultValue={art.rating}
                  placeholder="Rating"
                  required
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text">Customizable</span>
              </label>
              <select
                name="customizable"
                defaultValue={art.customization}
                className="input input-bordered w-full"
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>

          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Processing time</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="processingTime"
                  defaultValue={art.processing_time}
                  placeholder="Processing Time"
                  required
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text">Stock Status</span>
              </label>
              <select
                name="stockStatus"
                defaultValue={art.stockStatus}
                className="input input-bordered w-full"
              >
                <option value="In Stock">In Stock</option>
                <option value="Made to Order">Made to Order</option>
              </select>
            </div>
          </div>

          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  defaultValue={art.name}
                  placeholder="Your Name"
                  required
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="email"
                  defaultValue={art.email}
                  placeholder="Your Email"
                  required
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Your Art Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  defaultValue={art.photo}
                  placeholder="Your Art Photo URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Update Your Art"
            className="btn btn-block  btn-primary text-white "
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateArt;

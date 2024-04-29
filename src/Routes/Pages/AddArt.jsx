import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const AddArt = () => {
  const { user } = useContext(AuthContext);
  const uid = user?.uid;
  const handleAddArt = (e) => {
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

    const addedArt = {
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
      uid,
    };
    console.log(addedArt);

    // send data to the server
    fetch("http://localhost:5000/myArt", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addedArt),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Congrats!",
            text: "Art item Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="min-h-screen">
      <div className="bg-sky-200 bg-opacity-75 p-2 md:p-6 md:w-3/4 lg:w-2/4 mx-auto rounded-md mt-10">
        <h2 className="text-3xl font-extrabold font-platypi text-center underline">
          Add Your Art
        </h2>
        <form onSubmit={handleAddArt}>
          {/* form name and quantity row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2 w-full">
              <label className="label">
                <span className="label-text">Art Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="artName"
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
                  placeholder="Subcategory Name"
                  required
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form name and quantity row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="shortDescription"
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
                  placeholder="Price"
                  required
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form name and quantity row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Rating (Out of 5.00)</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="rating"
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
                className="input input-bordered w-full"
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>
          {/* form supplier row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Processing time</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="processingTime"
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
                className="input input-bordered w-full"
              >
                <option value="In Stock">In Stock</option>
                <option value="Made to Order">Made to Order</option>
              </select>
            </div>
          </div>
          {/* form category and details row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
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
                  placeholder="Your Email"
                  required
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form Photo url row */}
          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Your Art Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  placeholder="Your Art Photo URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Add Your Art"
            className="btn btn-block  btn-primary text-white "
          />
        </form>
      </div>
    </div>
  );
};

export default AddArt;

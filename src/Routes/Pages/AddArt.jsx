const AddArt = () => {
  const handleAddArt = (e) => {
    e.preventDefault();
    const form = e.target;
    const stockStatus = form.stockStatus.value;
    console.log(stockStatus);
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

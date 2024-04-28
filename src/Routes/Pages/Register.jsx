import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-sky-200 bg-opacity-75 p-2 md:p-6 md:w-3/4 lg:w-2/4 mx-auto rounded-md mt-10">
        <h2 className="text-2xl md:text-3xl font-extrabold font-platypi text-center underline mb-2">
          Register Please
        </h2>
        <form
        // onSubmit={handleAddCoffee}
        >
          {" "}
          <div className="mb-2">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="input input-bordered border border-sky-300 w-full"
                />
              </label>
            </div>
          </div>
          <div className="mb-2">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <label className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="mb-2">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="mb-2">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <label className="input-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <p className="text-center mb-3">
            Already have a account? Please{" "}
            <Link to="/login" className="underline text-blue-800">
              Login
            </Link>
          </p>
          <input
            type="submit"
            value="Register"
            className="btn btn-block btn-primary text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default Register;

import { Outlet } from "react-router-dom";

const Roots = () => {
  return (
    <div className="font-poppins md:mx-20">
      <Outlet></Outlet>
    </div>
  );
};

export default Roots;

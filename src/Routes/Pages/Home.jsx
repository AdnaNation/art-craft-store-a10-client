import { useLoaderData } from "react-router-dom";

const Home = () => {
  const artAndCrafts = useLoaderData();
  console.log(artAndCrafts);
  return (
    <div>
      {artAndCrafts.map((art) => (
        <div key={art._id}>
          <img src={art.image} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Home;

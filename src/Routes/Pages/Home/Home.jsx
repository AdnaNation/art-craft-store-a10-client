import { useLoaderData } from "react-router-dom";
import ArtSection from "./ArtSection";

const Home = () => {
  const artAndCrafts = useLoaderData();
  console.log(artAndCrafts);
  return (
    <div>
      <div>
        <h2 className="font-platypi">Art Items</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {artAndCrafts.map((art) => (
            <ArtSection
              className="grid grid-cols-3"
              key={art._id}
              art={art}
            ></ArtSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

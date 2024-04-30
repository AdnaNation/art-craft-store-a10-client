import { useLoaderData } from "react-router-dom";
import ArtSection from "./ArtSection";
import Banner from "./Banner";
import BestArtist from "./BestArtist";
import Testimonial from "./Testimonial";

const Home = () => {
  const artAndCrafts = useLoaderData();

  return (
    <div className="min-h-screen">
      <Banner></Banner>
      <div>
        <h2 className="font-platypi text-center font-extrabold text-2xl md:text-4xl">
          Art Items
        </h2>
        <p className="text-center text-sm md:text-lg text-gray-500 mx-10 md:mx-16 mt-4">
          Explore a vast collection of painting and drawing supplies and
          services to bring your creative vision to life.
        </p>
        <hr className="border border-sky-100 mx-10 md:mx-16 my-4" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artAndCrafts.map((art) => (
            <ArtSection
              className="grid grid-cols-3"
              key={art._id}
              art={art}
            ></ArtSection>
          ))}
        </div>
      </div>
      <BestArtist></BestArtist>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;

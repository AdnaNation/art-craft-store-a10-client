import { useLoaderData } from "react-router-dom";

const ArtDetails = () => {
  const art = useLoaderData();
  return (
    <div>
      <h2>{art.item_name}</h2>
    </div>
  );
};

export default ArtDetails;

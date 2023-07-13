import { useParams } from "react-router-dom";
const Details = () => {
  const { id } = useParams();
  return <h2>Weolcome to details! ID: {id}</h2>;
};

export default Details;

import { Link } from "react-router-dom";

function Card(props) {
  return (
    <Link
      to={`/country/${props.name}`}
      state={props.countryData}
      className="card-container"
    >
      <img src={props.src} alt={`Flag of ${props.name}`} />
      <h3>{props.name}</h3>
      <h4>Population: {props.Population}</h4>
      <h4>Region: {props.Region}</h4>
      <h4>Capital: {props.Capital}</h4>
    </Link>
  );
}

export default Card;

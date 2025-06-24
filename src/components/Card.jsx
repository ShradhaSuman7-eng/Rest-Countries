import { useNavigate } from "react-router-dom";

function Card(props) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/country/${props.name}`, {
      state: props.countryData,
    });
  }

  return (
    <div className="card-container" onClick={handleClick}>
      <img src={props.src} />
      <h3>{props.name}</h3>
      <h4>Population : {props.Population}</h4>
      <h4>Region : {props.Region}</h4>
      <h4>Capital : {props.Capital}</h4>
    </div>
  );
}

export default Card;

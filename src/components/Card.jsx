
function Card(props) {
  return (
    <div className="card-container">
      <img src={props.src} />
      <h3>{props.name}</h3>
      <h4>Population : {props.Population}</h4>
      <h4>Region : {props.Region}</h4>
      <h4>Capital : {props.Capital}</h4>
    </div>
  );
}

export default Card;

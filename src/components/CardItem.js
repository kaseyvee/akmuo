import "./CardItem.scss";

export default function CardItem(props) {
  return (
    <div className="card-item">
      <img src={props.photo} alt="" />
      <p className="item-name">{props.name}</p>
      <p>${props.price.toFixed(2)}</p>
    </div>
  );
}


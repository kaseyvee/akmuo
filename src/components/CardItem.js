import { Link } from "react-router-dom";
import "./CardItem.scss";

export default function CardItem(props) {
  return (
    <Link to={`/${props.id}`}>
      <div className="card-item">
        <img src={props.photo} alt="" />
        <p className="item-name">{props.name}</p>
        <p>${props.price.toFixed(2)}</p>
      </div>
    </Link>
  );
}


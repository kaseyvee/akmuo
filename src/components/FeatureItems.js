import "./FeatureItems.scss";
import CardItem from "./CardItem";
import database from "../database";

export default function FeatureItems() {

  const items = database.map((item) => {
    return (
      <CardItem
        key={item.id}
        photo={item.photos[0]}
        name={item.name}
        price={item.price}
      />
    )
  })

  return (
    <section className="FeatureItems">
      <div className="feature-title">shop chunkies</div>
      <div className='feature-scroll'>
        {items}
      </div>
    </section>
  );
}


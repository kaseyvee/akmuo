import "./FeatureItems.scss";
import CardItem from "../CardItem";
import { database } from "../../database";
import { getItemsByCategory } from "../../selectors";

export default function FeatureItems() {

  const currentFeature = getItemsByCategory(database, "chunky")

  const items = currentFeature.map((item) => {
    return (
      <CardItem
        key={item.id}
        id={item.id}
        photo={item.photos[0]}
        name={item.name}
        price={item.price}
      />
    )
  })

  const screenWidth = document.documentElement.clientWidth;

  function handleScrollLeft() {
    document.getElementById('feature-scroll').scrollLeft -= screenWidth;
  }

  function handleScrollRight() {
    document.getElementById('feature-scroll').scrollLeft += screenWidth;
  }

  return (
    <section className="FeatureItems">
      <div className="feature-title">shop chunkies</div>
      <div id='feature-scroll'>
        <i className="fa-solid fa-angle-left" onClick={handleScrollLeft}></i>
        {items}
        <i className="fa-solid fa-angle-right" onClick={handleScrollRight}></i>
      </div>
    </section>
  );
}


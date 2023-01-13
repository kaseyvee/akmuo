import "./ViewItem.scss";
import { useParams } from "react-router-dom";
import database from "../../database";
import getItemById from "../../selectors";
import Spacer from "../Spacer";
import CategoryItem from "./CategoryItem";
import VariationItem from "./VariationItem";

function ViewItem() {
  const { id } = useParams();
  const currentItem = getItemById(database, Number(id));
  console.log("currentItem: ", currentItem)

  const styles = currentItem.variations.map(variation => {
    return (
      <VariationItem
        variation={variation}
      />
    )
  })

  const categories = currentItem.categories.map(category => {
    return (
      <CategoryItem
        category={category}
      />
    )
  })

  return (
    <>
      <Spacer />
      <div className="ViewItem">
        <div className="view-top">
          <div className="preview">
            <img src={currentItem.photos[0]} alt=""/>
            {/* add carousel */}
          </div>
          <div className="view-top-right">

            <div className="main-info">
              <h1>{currentItem.name}</h1>
              <p>size {currentItem.size}mm</p>
              <p>${currentItem.price.toFixed(2)}</p>
            </div>

            <div className="styles">
              styles:
              <div className="styles-list">{styles}</div>
            </div>

            <div className="actions">
              <p className="size-chart">find your size</p>
              <button>ADD TO BAG</button>
            </div>

          </div>
        </div>


        <div className="view-bottom">

          <div>
            description:
            <p>{currentItem.description}</p>
          </div>

          <div className="categories">
            {categories}
          </div>

        </div>
      </div>
    </>
  );
}

export default ViewItem;

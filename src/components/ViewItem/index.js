import "./ViewItem.scss";
import { useParams } from "react-router-dom";
import database from "../../database";
import getItemById from "../../selectors";
import Spacer from "../Spacer";

function ViewItem() {
  const { id } = useParams();
  const currentItem = getItemById(database, Number(id));
  console.log("currentItem: ", currentItem)

  return (
    <>
      <Spacer />
      <div className="ViewItem">
        <div className="view-top">
          <img src={currentItem.photos[0]} alt=""/>
          <div className="view-top-right">
            <div className="main-info">
              <p>{currentItem.name}</p>
              <p>size {currentItem.size}mm</p>
              <p>${currentItem.price.toFixed(2)}</p>
            </div>
            <div className="styles">
              {/* {styles} */}
            </div>
            <div>
              <p>find your size</p>
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
            {/* {categories} */}
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewItem;

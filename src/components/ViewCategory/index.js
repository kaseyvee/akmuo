import './ViewCategory.scss';
import { useParams } from 'react-router-dom';
import { getItemsByCategory } from '../../selectors';
import { database } from '../../database';
import Spacer from '../Spacer';
import CardItem from '../CardItem';

export default function ViewCategory() {
  const { category } = useParams();

  function fixCategoryName(category) {
    let fixedName = "";
    for (let char of category) {
      if (char === "-") {
        fixedName += " ";
      } else {
        fixedName += char;
      }
    }
    return fixedName;
  }

  const currentItems = getItemsByCategory(database, fixCategoryName(category));

  const items = currentItems.map((item) => {
    return (
      <CardItem
        key={item.id}
        id={item.id}
        photo={item.photos[0]}
        name={item.name}
        price={item.price}
      />
    )
  });

  return (
    <>
      <Spacer />
      <section className="ViewCategory">
        <div className='filters'>
          <h1>filters</h1>
          <div>sort by</div>
          <div>size</div>
          <div>colour</div>
        </div>
        <div className='items'>
          <h1>{fixCategoryName(category)}</h1>
          <div className='items-list'>
            {items}
          </div>
        </div>
      </section>
    </>
  );
}


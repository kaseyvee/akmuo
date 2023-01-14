// import './ViewCategory.scss';
import { useParams } from 'react-router-dom';
import { getItemsByCategory } from '../../selectors';
import { database } from '../../database';
import Spacer from '../Spacer';
import CardItem from '../CardItem';

export default function ViewCategory() {
  const { category } = useParams();
  const currentItems = getItemsByCategory(database, category);

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
          
        </div>
        <div className='items-list'>
          {items}
        </div>
      </section>
    </>
  );
}


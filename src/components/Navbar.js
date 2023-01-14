import './Navbar.scss';
import { Link } from 'react-router-dom';
import { categories } from '../database';

export default function Navbar() {

  const categoryList = categories.map(category => {
    return (
      <Link
        key={categories.indexOf(category)}
        to={`/${category}`}
      >
        {category}
      </Link>
    )
  })

  return (
    <nav className="Navbar">
      <div className='title'>
        <Link to="/">AKMUO</Link>
        <div className='user-menu'>
          <a href=''><img src='https://i.imgur.com/KhgjqEF.png' alt='search icon' /></a>
          <a href=''><img src='https://i.imgur.com/BHaQJi1.png' alt='current user' /></a>
          <a href=''><img src='https://i.imgur.com/jjpvRmp.png' alt='cart' /></a>
        </div>
      </div>
      <div className='shop-menu'>
        <div className='dropdown'>
          <a href='' className='shop-all'>shop all</a>
          <div className='dropdown-list'>
            {categoryList}
          </div>
        </div>
        <a href=''>new arrivals</a>
        <a href=''>best sellers</a>
        <a href=''>sale</a>
        <a href=''>about us</a>
      </div>
    </nav>
  );
}


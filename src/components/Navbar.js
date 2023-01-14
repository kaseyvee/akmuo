import './Navbar.scss';
import { Link } from 'react-router-dom';
import { categories } from '../database';

export default function Navbar() {

  const categoryList = categories.map(category => {
    return (
      <Link
        key={categories.indexOf(category)}
        to={`/category/${category}`}
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
        <Link to='/category/new-arrivals'>new arrivals</Link>
        <Link to='/category/best-sellers'>best sellers</Link>
        <Link to='/sale'>sale</Link>
        <Link to='/about-us'>about us</Link>
      </div>
    </nav>
  );
}


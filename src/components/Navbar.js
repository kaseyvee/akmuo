import './Navbar.scss';

export default function Navbar() {
  return (
    <nav className="Navbar">
      <div className='title'>
        AKMUO
        <div className='user-menu'>
          <a href=''><img src='https://i.imgur.com/KhgjqEF.png' alt='search icon' /></a>
          <a href=''><img src='https://i.imgur.com/BHaQJi1.png' alt='current user' /></a>
          <a href=''><img src='https://i.imgur.com/jjpvRmp.png' alt='cart' /></a>
        </div>
      </div>
      <div className='shop-menu'>
        <a href=''>shop all</a>
        <a href=''>new arrivals</a>
        <a href=''>best sellers</a>
        <a href=''>sale</a>
        <a href=''>about us</a>
      </div>
    </nav>
  );
}


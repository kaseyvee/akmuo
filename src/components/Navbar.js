import './Navbar.scss';

export default function Navbar() {
  return (
    <nav className="Navbar">
      <div className='title'>AKMUO</div>
      <div className='menu'>
        <a href=''>shop all</a>
        <a href=''>new arrivals</a>
        <a href=''>best sellers</a>
        <a href=''>sale</a>
        <a href=''>about us</a>
      </div>
    </nav>
  );
}


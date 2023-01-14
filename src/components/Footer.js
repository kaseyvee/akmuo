import './Footer.scss';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="Footer">
      <div className='footer-items'>
        <Link to='/contact'>contact</Link>
        <Link to='/faq'>faq</Link>
        <Link to='/about-us'>about us</Link>
        <Link to='/policies'>policies</Link>
      </div>
      <div className='socials'>
        <a href='https://www.instagram.com/akmuo.jewelry/' target="_blank" rel="noreferrer noopener"><i className="fa-brands fa-instagram"></i></a>
        <a href='https://www.tiktok.com/@akmuo.jewelry' target="_blank" rel="noreferrer noopener"><i className="fa-brands fa-tiktok"></i></a>
      </div>
      <div className='developer'>designed by <a href='https://github.com/kaseyvee/akmuo' target="_blank" rel="noreferrer noopener">kasey</a></div>
    </footer>
  );
}


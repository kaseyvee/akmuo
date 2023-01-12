import './Footer.scss';

export default function Footer() {
  return (
    <footer className="Footer">
      <div className='footer-items'>
        <a href=''>contact</a>
        <a href=''>faq</a>
        <a href=''>about us</a>
        <a href=''>policies</a>
      </div>
      <div className='socials'>
        <a href='https://www.instagram.com/akmuo.jewelry/' target="_blank" rel="noreferrer noopener"><i class="fa-brands fa-instagram"></i></a>
        <a href='https://www.tiktok.com/@akmuo.jewelry' target="_blank" rel="noreferrer noopener"><i class="fa-brands fa-tiktok"></i></a>
      </div>
      <div className='developer'>designed by <a href='https://github.com/kaseyvee/akmuo'>kasey</a></div>
    </footer>
  );
}


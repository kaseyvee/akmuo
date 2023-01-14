import './FeatureRedirect.scss';
import { Link } from 'react-router-dom';

export default function FeatureRedirect() {
  return (
    <section className='FeatureRedirect'>
      <div className='text'>
        <div className='header'>Spring is coming.</div>
        <Link to="/new-arrivals" className='btn'>SHOP NEW ARRIVALS</Link>
      </div>
      <img src='https://i.imgur.com/Yt5yclT.png' alt='rings in sunlight' />
    </section>
  );
}


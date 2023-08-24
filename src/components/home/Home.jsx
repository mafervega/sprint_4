import { Link } from 'react-router-dom';
import './stily.scss';

const Home = () => {
  return (
    <div className='home'>
      <Link to="/pasos">
        <img className='imagenes' src='https://i.ibb.co/rtQqyrf/Logocart.png' alt="" />
      </Link>
    </div>
  );
}

export default Home;

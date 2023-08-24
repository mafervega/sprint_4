import { Link } from 'react-router-dom';
import './style.scss';
import ima from '../img/WhatsApp Image 2023-08-21 at 11.55.46.jpeg';

const Pasos = () => {

  return (
    <div>
      <img src={ima} alt="" />
      <p>
        Choose what to eat choosing from a variety of restaurants from the list
      </p>

      <Link to='/Pasos1'>
        <button>Next</button> 
      </Link>
    </div>
  );
}

export default Pasos;

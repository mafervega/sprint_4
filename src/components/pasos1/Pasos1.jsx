import './style1.scss';
import ima from '../img/WhatsApp Image 2023-08-21 at 12.35.50.jpeg';
import { Link } from 'react-router-dom';

const Pasos1 = () => {
 
  return (
    <div>
      <img src={ima} alt="" />
      <p>
        Choose where you want to deliver by indicting on the map
      </p>
      <Link to="/Pasos2">
      <button>Next</button></Link>
     
    </div>
  );
}

export default Pasos1;

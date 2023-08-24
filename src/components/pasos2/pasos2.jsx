import Swal from 'sweetalert2'; // Importar Sweet Alert
import './style.scss';
import ima from '../img/WhatsApp Image 2023-08-21 at 12.43.31.jpeg';
import { Link } from 'react-router-dom';

const Pasos2 = () => {
  const showSweetAlert = () => {
    Swal.fire({
      title: 'andoando',
      text: 'caminando',
      icon: 'success',
      confirmButtonText: 'siguiente'
    });
  };

  return (
    <div>
      <img src={ima} alt="" />
      <p>
        We will deliver as soon as possible
      </p>
      <Link>
      <button onClick={showSweetAlert}>Next</button> 

      </Link>
    </div>
  );
}

export default Pasos2;

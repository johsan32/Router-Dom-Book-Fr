import  React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Undefined = () => {
    const loc = useLocation();
    console.log(loc);
    return ( 
        <div className="container">
            <Link to= "/">
                <img className='img-fluid' style={{width:"85vw", height:"70vh"}} 
                src="https://cdn.dribbble.com/users/605899/screenshots/4144886/media/47ae8417ee638d039a4b7300439ea061.gif" alt=""  /> 
            </Link>
            <p className='text-center fw-bold text-danger'>Sorry, the page you are looking for could not be found. 
                {loc.state&& <span className='text-warning'> Code:</span>} <span className='badge bg-danger'>{loc.state}</span>
            </p>
        </div>
     );
}
 
export default Undefined;
import logo from './logo.jpeg';
import './App.css';
import { Outlet, Link } from 'react-router-dom';
import Footer from './footer.js';

const Header = () => {
    return (
        <>  <div className='container-fluid'>
            <div className="container-fluid head " >
                <div className="navbar-brand">
                    <div className="navbar">
                        <img src={logo} alt='logo' className=' p-2 ' width='250px' />
                        <li className="nav ms-auto "><Link className='nav-link text-white  fw-bold' to="/">Home</Link ></li>
                        <li className="nav ms-5 "> <Link className='nav-link text-white  fw-bold' to="/contact">Contact</Link ></li>
                        <li className="nav mx-5"><Link className='nav-link text-white fw-bold' to="/about">About</Link > </li>
                    </div>
                </div>
                </div>

            </div><Outlet />
            
            <Footer />
        </>

    );
}
export default Header;
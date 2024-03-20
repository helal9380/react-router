import { Link } from "react-router-dom";
import './herder.css'

const Header = () => {
    return (
        <div>
            <h1>React Router</h1>
  
            <Link className="header" to={'/'}>Home</Link>
            <Link className="header" to={'/users'}>Users</Link>
            <Link className="header" to={'/about'}>About</Link>
            <Link className="header" to={'/contact'}>Contact Us</Link>
            <Link className="header" to={'/service'}>Service</Link>
        </div>
    );
};

export default Header;
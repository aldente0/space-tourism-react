import {Link, useLocation} from "react-router-dom";
import logo from '../../../icons/logo-main.svg';
import mobileMenuIcon from '../../../icons/icon-hamburger.svg';


function Header({hamburgerVisible, setHamburgerVisible}) {
    const location = useLocation().pathname;

    return (
        <header>
            <nav className="transparent">
                <div className="nav-wrapper ">
                    <Link to='/' className="brand-logo left"><img src={logo} alt="logo" /></Link>
                    <div className="divider-header"></div>
                    <ul id="nav__pages ul" className="right">
                        <li className={location === '/' ? 'dekstop dekstop_active' : 'dekstop'}><Link to='/'><span>00</span> Home</Link></li>
                        <li className={location === '/destination' ? 'dekstop dekstop_active' : 'dekstop'}><Link to='/destination'><span>01</span> Destination</Link></li>
                        <li className={location === '/crew' ? 'dekstop dekstop_active' : 'dekstop'}><Link to="/crew" ><span>02</span> Crew</Link></li>
                        <li className={location === '/technology' ? 'dekstop dekstop_active' : 'dekstop'}><Link to="/technology" ><span>03</span> Technology</Link></li>
                        <li className="mobile" onClick={() => setHamburgerVisible(!hamburgerVisible)}>
                            {
                                !hamburgerVisible ? <img src={mobileMenuIcon} alt="hamburger"/>
                                : null
                            }
                        </li>
                        
                    </ul>
                        
                </div>
            </nav>
            
        </header>
    )
}

export {Header};
import {Link} from "react-router-dom";
import logo from '../../../icons/logo-main.svg';
import mobileMenuIcon from '../../../icons/icon-hamburger.svg';

function Header({hamburgerVisible, setHamburgerVisible}) {
    

    return (
        <header>
            <nav className="transparent">
                <div className="nav-wrapper ">
                    <Link to='/' className="brand-logo left"><img src={logo} alt="logo" /></Link>
                        <ul id="nav-mobile ul" className="right">
                            <li className='dekstop'><Link to='/'>Home</Link></li>
                            <li className='dekstop'><Link to='/destination'>Destination</Link></li>
                            <li className='dekstop'><Link to="/crew" >Crew</Link></li>
                            <li className='dekstop'><Link to="/technology" >Technology</Link></li>
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
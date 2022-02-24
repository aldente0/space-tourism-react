import {Link} from "react-router-dom";

function Header({hamburgerVisible, setHamburgerVisible}) {
    

    return (
        <header>
            <nav className="transparent">
                <div className="nav-wrapper ">
                    <Link to='/' className="brand-logo left"><img src="/icons/logo-main.svg" alt="logo" /></Link>
                        <ul id="nav-mobile ul" className="right">
                            <li className='dekstop'><Link to='/'>Home</Link></li>
                            <li className='dekstop'><Link to='/destination'>Destination</Link></li>
                            <li className='dekstop'><Link to="/crew" >Crew</Link></li>
                            <li className='dekstop'><Link to="/technology" >Technology</Link></li>
                            <li className="mobile" onClick={() => setHamburgerVisible(!hamburgerVisible)}>
                                {
                                    !hamburgerVisible ? <img src="/icons/icon-hamburger.svg" alt="hamburger"/>
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
import {Link, useLocation} from 'react-router-dom';
import closeIcon from '../../../icons/icon-close.svg';

function Hamburger(props) {
    const {handleClick, className} = props;
    const location = useLocation().pathname;

    return (
        <div className={className}>
        <img src={closeIcon} className='hamburger__close' alt="close" onClick={handleClick}/>
        <div className="hamburger__elems">
            <Link className={location === '/' ? 'hamburger__elem active' : 'hamburger__elem'} to="/" onClick={handleClick}><span>00</span> Home</Link>
            <Link className={location === '/destination' ? 'hamburger__elem active' : 'hamburger__elem'} to="/destination" onClick={handleClick}><span>01</span> Destination</Link>
            <Link className={location === '/crew' ? 'hamburger__elem active' : 'hamburger__elem'}to="/crew" onClick={handleClick}><span>02</span> Crew</Link>
            <Link className={location === '/technology' ? 'hamburger__elem active' : 'hamburger__elem'} to="/technology" onClick={handleClick}><span>03</span> Technology</Link>
        </div>
        </div>
        
    )
}
export {Hamburger};
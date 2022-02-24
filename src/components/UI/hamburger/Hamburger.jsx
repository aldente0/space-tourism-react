import {Link} from 'react-router-dom';
import closeIcon from '../../../icons/icon-close.svg';

function Hamburger(props) {
    const {handleClick, className} = props;

    return (
        <div className={className}>
        <img src={closeIcon} className='hamburger__close' alt="close" onClick={handleClick}/>
        <div className="ham__elems">
            <Link className="ham_elem" to="/" onClick={handleClick}><span>00</span> Home</Link>
            <Link className="ham_elem" to="/destination" onClick={handleClick}><span>01</span> Destination</Link>
            {/* <Link className="ham_elem" to="/crew" onClick={handleClick}><span>02</span> Crew</Link>
            <Link className="ham_elem" to="/technology" onClick={handleClick}><span>03</span> Technology</Link> */}
        </div>
        </div>
        
    )
}
export {Hamburger};
import {Link} from 'react-router-dom';
import closeIcon from '../../../icons/icon-close.svg';
import {useEffect, useState} from 'react';

function Hamburger(props) {
    const {handleClick, className} = props;
    const [location, setLocation] = useState(window.location.href.split('/')[4]);

    useEffect(() => {
        console.log(window.location.href.split('/'))
    }, []);

    return (
        <div className={className}>
        <img src={closeIcon} className='hamburger__close' alt="close" onClick={handleClick}/>
        <div className="ham__elems">
            <Link className={!location ? 'ham__elem active' : 'ham__elem'} to="/" onClick={handleClick}><span>00</span> Home</Link>
            <Link className={location === 'destination' ? 'ham__elem active' : 'ham__elem'} to="/destination" onClick={handleClick}><span>01</span> Destination</Link>
            <Link className={location === 'crew' ? 'ham__elem active' : 'ham__elem'}to="/crew" onClick={handleClick}><span>02</span> Crew</Link>
            <Link className={location === 'technology' ? 'ham__elem active' : 'ham__elem'} to="/technology" onClick={handleClick}><span>03</span> Technology</Link>
        </div>
        </div>
        
    )
}
export {Hamburger};
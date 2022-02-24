import { Link } from "react-router-dom";
import cl from './ExploreBtn.module.css';


export function ExploreBtn() {
    return (
        <Link to='/destination' className={cl.exploreBtn}>Explore</Link>
    )
}
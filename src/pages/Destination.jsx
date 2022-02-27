import { useState, useEffect} from "react";
import { DestinationSlider } from "../components/UI/slider/DestinationSlider";
import { data } from '../data';
import moon from '../assets/destination/image-moon.png';
import mars from '../assets/destination/image-mars.png';
import europa from '../assets/destination/image-europa.png';
import titan from '../assets/destination/image-titan.png';

function Destination() {
    const [planetInfo, setInfo] = useState({});
    const [currentPlanet, setCurrentPlanet] = useState('Moon');
    const [planets, setPlanets] = useState([moon, mars, europa, titan]); 

    useEffect(() => {
        setInfo(data.destinations.filter(planet => planet.name === currentPlanet)[0]);
    }, [currentPlanet])

    return (
        <div className="destination page">
             <div className="container">
                <h5 className='page__uptitle'><span>01</span> Pick your destination</h5>
                <DestinationSlider 
                    planetInfo={planetInfo}
                    images={planets}
                    currentSlide={currentPlanet}
                    collectionWithImg={data.destinations}
                    setCurrentSlide={setCurrentPlanet}
                 />
            </div>
        </div>
    )
}

export {Destination};
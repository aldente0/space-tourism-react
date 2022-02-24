import { useState, useEffect} from "react";
import { SwiperSlider } from "../components/UI/slider/SwiperSlider";
import { data } from '../data';
import { PageMainText } from "../components/PageMainText";
import { PageAdditionalText } from "../components/PageAdditionalText";
import moon from '../assets/destination/image-moon.png';
import mars from '../assets/destination/image-mars.png';
import europa from '../assets/destination/image-europa.png';
import titan from '../assets/destination/image-titan.png';

function Destination() {
    const [planetInfo, setInfo] = useState({});
    const [currentPlanet, setCurrentPlanet] = useState('moon');
    const [planets, setPlanets] = useState([moon, mars, europa, titan]); 

    useEffect(() => {
        setInfo(data.destinations.filter(planet => planet.name.toLowerCase() === currentPlanet)[0]);
    }, [currentPlanet])

    return (
        <div className="destination page">
             <div className="container">
                <h5 className='page__uptitle'><span>01</span> Pick your destination</h5>
                <SwiperSlider planets={planets} collectionWithImg={data.destinations} currentSlide={currentPlanet} setCurrentSlide={setCurrentPlanet}/>
                <PageMainText description={planetInfo.description} name={planetInfo.name}/>
                <PageAdditionalText distance={planetInfo.distance} travel={planetInfo.travel}/>
                
            </div>
        </div>
    )
}

export {Destination};
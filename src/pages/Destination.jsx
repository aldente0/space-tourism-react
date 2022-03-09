import { useState, useEffect} from "react";

import { useSliderPagination } from "../hooks/useSliderPagination";
import { Slider } from "../components/UI/slider/Slider";
import { sliderPaginationParameters } from "../utils/sliderPaginationParameters";

import data from '../data.json';

import moon from '../assets/destination/image-moon.png';
import mars from '../assets/destination/image-mars.png';
import europa from '../assets/destination/image-europa.png';
import titan from '../assets/destination/image-titan.png';

function Destination() {
    const [planetInfo, setInfo] = useState({});
    const [currentPlanet, setCurrentPlanet] = useState('Moon');
    const [planets, setPlanets] = useState([moon, mars, europa, titan]);

    const sliderPagination = useSliderPagination(data.destinations, 'name');

    useEffect(() => {
        setInfo(data.destinations.filter(planet => planet.name === currentPlanet)[0]);
    }, [currentPlanet])

    return (
        <div className="destination page">
             <div className="container">
                <h5 className='page__uptitle'><span>01</span> Pick your destination</h5>
                <Slider 
                    effect='fade'
                    title={planetInfo.name}
                    description={planetInfo.description}
                    additionalText={true}
                    paginationParametrs={sliderPaginationParameters('Planet', sliderPagination)}
                    textClassName='destination'
                    slideInfo={planetInfo}
                    images={planets}
                    travel={planetInfo.travel}
                    distance={planetInfo.distance}
                    currentSlide={currentPlanet}
                    collectionWithImg={data.destinations}
                    setCurrentSlide={setCurrentPlanet}
                 />
            </div>
        </div>
    )
}

export {Destination};
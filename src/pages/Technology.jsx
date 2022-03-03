import { useState, useEffect} from "react";

import { TechnologySlider } from "../components/UI/slider/TechnologySlider";

import { data } from "../data";

import launch from '../assets/technology/image-launch-vehicle-landscape.jpg';
import spaceport from '../assets/technology/image-spaceport-landscape.jpg'
import capsule from '../assets/technology/image-space-capsule-landscape.jpg';


function Technology() {

    const [technologyInfo, setInfo] = useState({});
    const [currentTechnology, setCurrentTechnology] = useState('Launch');
    const [technologies, setTechnologies] = useState([launch, spaceport, capsule]);

    useEffect(() => {
        if (currentTechnology === 'Space') {
            setInfo(data.technology.filter(pers => pers.name.includes('Space capsule'))[0]);
        } else {
            setInfo(data.technology.filter(pers => pers.name.includes(currentTechnology))[0]);
        }
        
    }, [currentTechnology])

    return (
        <div className="crew page">
            
            <h5 className='page__uptitle container'><span>03</span> Space Launch 101</h5>
            <div className="">
                <TechnologySlider
                technologyInfo={technologyInfo}
                images={technologies}
                currentSlide={currentTechnology}
                collectionWithImg={data.technology}
                setCurrentSlide={setCurrentTechnology}/>
            </div>
        </div>
    )
}

export {Technology};
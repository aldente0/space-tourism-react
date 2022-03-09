import { useState, useEffect} from "react";

import data from '../data.json';
import { sliderPaginationParameters } from "../utils/sliderPaginationParameters";
import { useSliderPagination } from "../hooks/useSliderPagination";
import { Slider } from "../components/UI/slider/Slider";

import launchMobile from '../assets/technology/image-launch-vehicle-landscape.jpg';
import spaceportMobile from '../assets/technology/image-spaceport-landscape.jpg'
import capsuleMobile from '../assets/technology/image-space-capsule-landscape.jpg';
import launchDesktop from '../assets/technology/image-launch-vehicle-portrait.jpg';
import spaceportDesktop from '../assets/technology/image-spaceport-portrait.jpg'
import capsuleDesktop from '../assets/technology/image-space-capsule-portrait.jpg';


function Technology() {

    const [technologyInfo, setInfo] = useState({});
    const [currentTechnology, setCurrentTechnology] = useState('Launch');
    const [technologies, setTechnologies] = useState([]);
    const [isDesktopScreen, setIsDesktopScreen] = useState(window.innerWidth >= 1023);

    const sliderPagination = useSliderPagination(data.technology, 'number');

    const handleWidth = () => {
        if (window.innerWidth >= 1023) {
            setIsDesktopScreen(true)
        } else {
            setIsDesktopScreen(false)
        }
    }

    useEffect(() => {
        if (currentTechnology === 'Space') {
            setInfo(data.technology.filter(pers => pers.name.includes('Space capsule'))[0]);
        } else {
            setInfo(data.technology.filter(pers => pers.name.includes(currentTechnology))[0]);
        }
        
    }, [currentTechnology])

    useEffect(() => {
        setTechnologies(isDesktopScreen ? [launchDesktop, spaceportDesktop, capsuleDesktop]
            : [launchMobile, spaceportMobile, capsuleMobile])
    }, [isDesktopScreen])

    useEffect(() => {
        window.addEventListener('resize', handleWidth);

        return function () {
            window.removeEventListener('resize', handleWidth);
        }
    }, [])

    return (
        <div className="technology page">
            
            <h5 className='page__uptitle container'><span>03</span> Space Launch 101</h5>
            <div className="">
                <Slider
                effect='fade'
                underSliderTecnology={true}
                description={technologyInfo.description}
                fullName={technologyInfo.name}
                paginationParametrs={sliderPaginationParameters('Technology', sliderPagination)}
                textClassName='technology'
                slideInfo={technologyInfo}
                images={technologies}
                currentSlide={currentTechnology}
                collectionWithImg={data.technology}
                setCurrentSlide={setCurrentTechnology}/>
            </div>
        </div>
    )
}

export {Technology};
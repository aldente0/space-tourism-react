import { useState, useEffect} from "react";
import data from '../data.json';

import { Slider } from "../components/UI/slider/Slider";
import { useSliderPagination } from "../hooks/useSliderPagination";
import { sliderPaginationParameters } from "../utils/sliderPaginationParameters";

import ansari from '../assets/crew/image-anousheh-ansari.png';
import hurley from '../assets/crew/image-douglas-hurley.png';
import shuttleworth from '../assets/crew/image-mark-shuttleworth.png';
import glover from '../assets/crew/image-victor-glover.png';

function Crew() {

    const [persInfo, setInfo] = useState({});
    const [currentPers, setCurrentPers] = useState('Douglas');
    const [team, setTeam] = useState([hurley, shuttleworth, glover, ansari]);

    const sliderPagination = useSliderPagination(data.crew, 'default');

    useEffect(() => {
        setInfo(data.crew.filter(pers => pers.name.includes(currentPers))[0]);
    }, [currentPers])


    return (
            <div className="crew page">
             <div className="container">
                <h5 className='page__uptitle'><span>02</span> Meet your crew</h5>
                <div className="">
                    <Slider
                    description={persInfo.bio}
                    role={persInfo.role} 
                    fullName={persInfo.name}
                    slideInfo={persInfo}
                    paginationParametrs={sliderPaginationParameters('Team', sliderPagination)}
                    textClassName='crew'
                    images={team}
                    currentSlide={currentPers}
                    collectionWithImg={data.crew}
                    setCurrentSlide={setCurrentPers}
                    />
                </div>
                </div>
            </div>
    )
}

export {Crew};
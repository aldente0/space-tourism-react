import { useState, useEffect} from "react";
import {data} from '../data';
import { CrewSlider } from "../components/UI/slider/CrewSlider";
import { PageMainText } from "../components/PageMainText";
import ansari from '../assets/crew/image-anousheh-ansari.png';
import hurley from '../assets/crew/image-douglas-hurley.png';
import shuttleworth from '../assets/crew/image-mark-shuttleworth.png';
import glover from '../assets/crew/image-victor-glover.png';

function Crew() {

    const [persInfo, setInfo] = useState({});
    const [currentPers, setCurrentPers] = useState('Douglas');
    const [team, setTeam] = useState([hurley, shuttleworth, glover, ansari]);

    useEffect(() => {
        setInfo(data.crew.filter(pers => pers.name.includes(currentPers))[0]);
    }, [currentPers])


    return (
            <div className="crew page">
             <div className="container">
                <h5 className='page__uptitle'><span>02</span> Meet your crew</h5>
                <div className="">
                    <CrewSlider
                    persInfo={persInfo}
                    images={team}
                    currentSlide={currentPers}
                    collectionWithImg={data.crew}
                    currentSlide={currentPers}
                    setCurrentSlide={setCurrentPers}
                    />
                </div>
                </div>
            </div>
    )
}

export {Crew};
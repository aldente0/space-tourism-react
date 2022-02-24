import { useState, useEffect, useMemo} from "react";
import { SwiperSlider } from "../components/UI/slider/SwiperSlider";
import { data } from '../data';

function Destination() {
    const [planetInfo, setInfo] = useState({});
    const [currentPlanet, setCurrentPlanet] = useState('moon');

    const changePlanet = (e) => {
        setCurrentPlanet(e.target.classList[0]);
    }

    useEffect(() => {
        setInfo(data.destinations.filter(planet => planet.name.toLowerCase() === currentPlanet)[0]);
    }, [currentPlanet])

    return (
        <div className="destination page">
             <div className="container">
                <h5 className='page__uptitle'><span>01</span> Pick your destination</h5>
                {/* <div className="planets"> */}

                    <SwiperSlider collectionWithImg={data.destinations} currentSlide={currentPlanet} setCurrentSlide={setCurrentPlanet}/>
                    {/* 
                    <img key={Math.random()} className="planet animate__animated animate__fadeInDown" src={`/assets/destination/image-${currentPlanet}.png`} alt={planetInfo.name} />

                    <div className="pagination">
                        <span className={currentPlanet === 'moon' ? 'moon pagination__elem_active' : 'moon pagination__elem'} onClick={changePlanet}>Moon</span>
                        <span className={currentPlanet === 'mars' ? 'mars pagination__elem_active' : 'mars pagination__elem'} onClick={changePlanet}>Mars</span>
                        <span className={currentPlanet === 'europa' ? 'europa pagination__elem_active' : 'europa pagination__elem'} onClick={changePlanet}>Europa</span>
                        <span className={currentPlanet === 'titan' ? 'titan pagination__elem_active' : 'titan pagination__elem'} onClick={changePlanet}>Titan</span>
                    </div> */}
                {/* </div> */}
                <h1 key={planetInfo.name} className='page__title animate__animated animate__fadeInDown'>{planetInfo.name}</h1>
                <p key={planetInfo.description} className='page__descr animate__animated animate__fadeInDown'>{planetInfo.description}</p>
                <div className="divider"></div>
                <div className="destination__adventure">
                    <span>AVG. DISTANCE</span><br />
                    <p className="animate__animated animate__fadeInDown" key={planetInfo.distance}>{planetInfo.distance}</p>
                </div>
                <div className="destination__adventure animate__animated animate__fadeInDown">
                    <span>Est. travel time</span><br />
                    <p className="animate__animated animate__fadeInDown" key={planetInfo.travel}>{planetInfo.travel}</p>
                </div>
            </div>
        </div>
    )
}

export {Destination};
import { useState, useEffect} from "react";
import {data} from '../data';

function Crew() {

    const [persInfo, setInfo] = useState({});
    const [currentPers, setCurrentPers] = useState('moon');

    const changePlanet = (e) => {
        setCurrentPers(e.target.classList[0]);
    }

    useEffect(() => {
        setInfo(data.crew.filter(pers => pers.name.toLowerCase() === currentPers)[0]);
    }, [currentPers])


    return (
            <div className="crew page">
             <div className="container">
                <h5 className='page__uptitle'><span>01</span> Pick your destination</h5>
                <div className="crews">

                    {/* <SwiperSlider collectionWithImg={data.destinations} currentSlide={currentPlanet} setCurrentSlide={setCurrentPlanet}/> */}
                    
                    <img key={Math.random()} className="planet" src={`/assets/destination/image-${currentPers}.png`} alt={persInfo.name} />

                    <div className="pagination">
                        <span className={currentPers === 'moon' ? 'moon pagination__elem_active' : 'moon pagination__elem'} onClick={changePlanet}>1</span>
                        <span className={currentPers === 'mars' ? 'mars pagination__elem_active' : 'mars pagination__elem'} onClick={changePlanet}>2</span>
                        <span className={currentPers === 'europa' ? 'europa pagination__elem_active' : 'europa pagination__elem'} onClick={changePlanet}>3</span>
                    </div>
                </div>
                <h1 key={persInfo.name} className='page__title animate__animated animate__fadeInDown'>{persInfo.name}</h1>
                <p key={persInfo.description} className='page__descr animate__animated animate__fadeInDown'>{persInfo.description}</p>
                </div>
            </div>
    )
}

export {Crew};
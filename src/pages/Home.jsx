import {ExploreBtn} from '../components/UI/button/ExploreBtn';

function Home() {
    

    return (
        <div className="home page">
            
            <div className="home__text">
                <h5 className='home__uptitle animate__animated animate__fadeInDown'>SO, YOU WANT TO TRAVEL TO SPACE</h5>
                <h1 className='page__title_main animate__animated animate__fadeInDown'>SPACE</h1>
                <p className='page__descr animate__animated animate__fadeInDown'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </div>
            <div className="home__btn">
                <ExploreBtn />
            </div>
            

        </div>
    )
}

export {Home};
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade } from 'swiper';
import { useMemo} from 'react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';


function SwiperSlider(props) {
    const {collectionWithImg, setCurrentSlide, planets} = props;

    const pagination = { 
        el: '.swiper__pagination',
        clickable: true,
        bulletClass: 'pagination__elem',
        bulletActiveClass: 'pagination__elem_active',
        renderBullet: function(index, className) {
            return `<span class='${swiperPaginationElems[index] + " " + className }'>${swiperPaginationElems[index]}</span>`
    }}


    

    const swiperPaginationElems = useMemo(() => {
        const res = [];
        for (let i = 0; i < collectionWithImg.length; i++) {
            res.push(collectionWithImg[i].name)
        }
        return res;
    }, []);

    return (

        <Swiper
            className='swiper'
            modules={[Pagination, EffectFade]}
            effect="fade"
            spaceBetween={50}
            pagination={pagination}
            slidesPerView={1}
            onSlideChange={(swiper) => {
                const classes = Array.from(swiper.visibleSlides[0].classList);
                const index = classes.find(item => {
                    return item.includes('Mars') || item.includes('Moon') || item.includes('Europa') || item.includes('Titan');
                });
                setCurrentSlide(index.toLowerCase());
            }}
            onSwiper={(swiper) => console.log(swiper)}
        >
          {collectionWithImg.map((planet, index) => (
                <SwiperSlide  key={planet.images.png} className={planet.name} virtualIndex={index}>
                     <img style={{width: '100%'}} src={planets[index]} alt={planet.name} />
                </SwiperSlide>
          ))}
          <div className="swiper__pagination">
          </div>
          ...
        </Swiper>
      );
}

export {SwiperSlider};
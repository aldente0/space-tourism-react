import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade} from 'swiper';
import { useMemo, useState} from 'react';
import { PageMainText } from '../../PageMainText';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';


function TechnologySlider(props) {
    const {collectionWithImg, setCurrentSlide, images, technologyInfo} = props;

    const pagination = { 
        el: '.swiper__pagination',
        clickable: true,
        bulletClass: 'paginationTechnology__elem',
        bulletActiveClass: 'paginationTechnology__elem_active',
        renderBullet: function(index, className) {
            return `<span class='${swiperPaginationElems[index] + " " + className }'>${swiperPaginationElems[index]}</span>`
    }};

    const swiperPaginationElems = useMemo(() => {
        const res = [];

        for (let i = 0; i < collectionWithImg.length; i++) {
            res.push(i + 1)
        }
        console.log(res);

        return res;
    }, []);

    return (

        <Swiper
            className='swiper'
            modules={[Pagination, EffectFade]}
            autoHeight
            effect='fade'
            spaceBetween={50}
            pagination={pagination}
            slidesPerView={1}
            onSlideChange={(swiper) => {
                const index = swiper.activeIndex;
                const elem = Array.from(swiper.slides[index].classList);

                const currentSlide = elem.find(item => {
                    return collectionWithImg[0].name.includes(item) || collectionWithImg[1].name.includes(item) || collectionWithImg[2].name.includes(item)
                });
                console.log(currentSlide)
                setCurrentSlide(currentSlide);
            }}
            onSwiper={(swiper) => console.log(swiper)}
        >
          {collectionWithImg.map((item, index) => (
                <SwiperSlide  key={item.images.landscape} className={item.name} virtualIndex={index}>
                    <img style={{width: '100%'}}  className={item.name} src={images[index]} alt={item.name} />
                </SwiperSlide>
          ))}
          <div className="pageTextAndPagination container">
            
            <div className="swiper__pagination tecnology__pagination">
            </div>

            <PageMainText underSliderTecnology={true} description={technologyInfo.description} fullName={technologyInfo.name}/>
          </div>
          
        </Swiper>
      );
}

export {TechnologySlider};
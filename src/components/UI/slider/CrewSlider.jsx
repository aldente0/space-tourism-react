import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade} from 'swiper';
import { useMemo, useState} from 'react';
import { PageMainText } from '../../PageMainText';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';


function CrewSlider(props) {
    const {collectionWithImg, setCurrentSlide, images, persInfo} = props;

    const pagination = { 
        el: '.swiper__pagination',
        clickable: true,
        bulletClass: 'paginationTeam__elem',
        bulletActiveClass: 'paginationTeam__elem_active',
        renderBullet: function(index, className) {
            return `<span class='${swiperPaginationElems[index] + " " + className }'>${swiperPaginationElems[index]}</span>`
    }};

    const swiperPaginationElems = useMemo(() => {
        const res = [];

        for (let i = 0; i < collectionWithImg.length; i++) {
            res.push('')
        }
        console.log(res);

        return res;
    }, []);

    return (

        <Swiper
            className='swiper'
            modules={[Pagination]}
            autoHeight
            spaceBetween={50}
            pagination={pagination}
            slidesPerView={1}
            onSlideChange={(swiper) => {
                const index = swiper.activeIndex;
                const elem = Array.from(swiper.slides[index].classList);

                const currentSlide = elem.find(item => {
                    return collectionWithImg[0].name.includes(item) || collectionWithImg[1].name.includes(item) || collectionWithImg[2].name.includes(item) || collectionWithImg[3].name.includes(item)
                });
                setCurrentSlide(currentSlide);
            }}
            onSwiper={(swiper) => console.log(swiper)}
        >
          {collectionWithImg.map((item, index) => (
                <SwiperSlide  key={item.images.png} className={item.name} virtualIndex={index}>
                    <img style={{width: '100%'}}  className={item.name} src={images[index]} alt={item.name} />
                    <div className="divider__slider"></div>
                </SwiperSlide>
          ))}
          <div className="pageTextAndPagination">
            <div className="swiper__pagination team__pagination">
            </div>

            <PageMainText description={persInfo.bio} role={persInfo.role}  fullName={persInfo.name}/>
          </div>
          
        </Swiper>
      );
}

export {CrewSlider};
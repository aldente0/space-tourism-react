import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade} from 'swiper';
import { useMemo, useState} from 'react';

import { PageMainText } from '../../PageMainText';
import { PageAdditionalText } from '../../PageAdditionalText';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';


function DestinationSlider(props) {
    const {collectionWithImg, setCurrentSlide, images, planetInfo} = props;

    const pagination = { 
        el: '.swiper__pagination',
        clickable: true,
        bulletClass: 'paginationPlanet__elem',
        bulletActiveClass: 'paginationPlanet__elem_active',
        renderBullet: function(index, className) {
            return `<span class='${swiperPaginationElems[index] + " " + className }'>${swiperPaginationElems[index]}</span>`
    }};

    const swiperPaginationElems = useMemo(() => {
        const res = [];

        for (let i = 0; i < collectionWithImg.length; i++) {
            res.push(collectionWithImg[i].name)
        }

        return res;
    }, []);

    return (

        <Swiper
            className='swiper swiper__destination'
            modules={[Pagination, EffectFade]}
            autoHeight
            effect='fade'
            spaceBetween={200}
            pagination={pagination}
            slidesPerView={1}
            onSlideChange={(swiper) => {
                const index = swiper.activeIndex;
                const elem = Array.from(swiper.slides[index].classList);

                const currentSlide = elem.find(item => {
                    return collectionWithImg[0].name.includes(item) || collectionWithImg[1].name.includes(item) || collectionWithImg[2].name.includes(item) || collectionWithImg[3].name.includes(item)
                });
                console.log(currentSlide)
                setCurrentSlide(currentSlide);
            }}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {collectionWithImg.map((item, index) => (
                <SwiperSlide 
                key={item.images.png}
                className={item.name}
                virtualIndex={index}
                >
                    <img
                        style={{width: '100%'}} 
                        className={item.name}
                        src={images[index]}
                        alt={item.name}
                    />
                </SwiperSlide>
            ))}

            <div className="pageTextAndPagination pageTextAndPagination__destination">
                <div className="swiper__pagination destination__pagination">
                </div>

                <PageMainText
                className='destination__text'
                description={planetInfo.description}
                title={planetInfo.name}
                />
                <PageAdditionalText
                travel={planetInfo.travel}
                distance={planetInfo.distance}
                />
            </div>
        </Swiper>
      );
}

export {DestinationSlider};
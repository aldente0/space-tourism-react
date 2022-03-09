import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade} from 'swiper';

import { getCurrentSlideInformation } from '../../../utils/getCurrentSlideInformation';
import { PageTextAndPagination } from '../../PageTextAndPagination';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';


function Slider(props) {
    const {
        title = '',
        role = '',
        fullName = '',
        description = '',
        underSliderTecnology = false,
        collectionWithImg,
        setCurrentSlide,
        images,
        paginationParametrs,
        textClassName,
        effect = '',
        travel='',
        distance='',
        additionalText = false} = props;

    return (

        <Swiper
            className={`swiper swiper__${textClassName}`}
            modules={[Pagination, EffectFade]}
            autoHeight
            effect={effect}
            direction='horizontal'
            breakpoints={{
                1023: {
                    direction: 'vertical'
                }
            }}
            spaceBetween={50}
            pagination={paginationParametrs}
            slidesPerView={1}
            onSlideChange={(swiper) => {
                setCurrentSlide(getCurrentSlideInformation(swiper, collectionWithImg));
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

            <PageTextAndPagination
            additionalText={additionalText}
            textClassName={textClassName}
            description={description}
            title={title ? title : null}
            role={role ? role : null} 
            fullName={fullName ? fullName : null}
            underSliderTecnology={underSliderTecnology}
            travel={travel}
            distance={distance}
            />
        </Swiper>
      );
}

export {Slider};
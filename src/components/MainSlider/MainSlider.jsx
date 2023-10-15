import React from 'react'
import { Navigation, Pagination, } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import styles from "./MainSlider.module.scss"

import slideMob1 from '../../assets/main-slider/slide-mob-1.png';
import slideMob2 from '../../assets/main-slider/slide-mob-2.png';
import slideMob3 from '../../assets/main-slider/slide-mob-3.png';
import slideMob4 from '../../assets/main-slider/slide-mob-4.png';
import slideTablet1 from '../../assets/main-slider/slide-tablet-1.png';
import slideTablet2 from '../../assets/main-slider/slide-tablet-2.png';
import slideTablet3 from '../../assets/main-slider/slide-tablet-3.png';
import slideTablet4 from '../../assets/main-slider/slide-tablet-4.png';
import slideDesk1 from '../../assets/main-slider/slide-desk-1.png';
import slideDesk2 from '../../assets/main-slider/slide-desk-2.png';
import slideDesk3 from '../../assets/main-slider/slide-desk-3.png';
import slideDesk4 from '../../assets/main-slider/slide-desk-4.png';

function MainSlider() {
    return (
        <Swiper
            className={styles.mainSlider}
            modules={[Navigation, Pagination,]}
            spaceBetween={20}
            slidesPerView="auto"
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true, el: ".mainSlide" }}
            breakpoints={{
                1280: {
                    slidesPerView: 1,
                },
            }}
        >
            <SwiperSlide className={styles.mainSlide}>
                <picture>
                    <source srcSet={slideDesk1} media='(min-width: 1280px)' />
                    <source srcSet={slideTablet1} media='(min-width: 600px)' />
                    <img src={slideMob1} alt="Фильм." />
                </picture>
            </SwiperSlide>
            <SwiperSlide className={styles.mainSlide}>
                <picture>
                    <source srcSet={slideDesk2} media='(min-width: 1280px)' />
                    <source srcSet={slideTablet2} media='(min-width: 600px)' />
                    <img src={slideMob2} alt="Фильм." />
                </picture>
            </SwiperSlide>
            <SwiperSlide className={styles.mainSlide}>
                <picture>
                    <source srcSet={slideDesk3} media='(min-width: 1280px)' />
                    <source srcSet={slideTablet3} media='(min-width: 600px)' />
                    <img src={slideMob3} alt="Фильм." />
                </picture>
            </SwiperSlide>
            <SwiperSlide className={styles.mainSlide}>
                <picture>
                    <source srcSet={slideDesk4} media='(min-width: 1280px)' />
                    <source srcSet={slideTablet4} media='(min-width: 600px)' />
                    <img src={slideMob4} alt="Фильм." />
                </picture>
            </SwiperSlide>
        </Swiper >

    )
}

export default MainSlider
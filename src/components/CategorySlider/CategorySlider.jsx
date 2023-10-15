import React from 'react'
import { Link } from 'react-router-dom';
// import { Navigation, Pagination, } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './CategorySlider.module.scss'
import slideImg from '../../assets/slide-film.png'
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

// import {
//     KinopoiskDev,
// } from '@openmoviedb/kinopoiskdev_client';

// const kp = new KinopoiskDev('9D0FG1N-TFDMD98-H6PWA8T-0F2CZ09');
// let dataCard = [];
// ; (async () => {
//     const { data, error, message } = await kp.movie.getRandom();

//     if (data) {
//         let result = data;
//         dataCard.push(result);
//         return;
//     }
// })();

function CategorySlider({ title }) {
    // console.log(dataCard[0]["type"])
    return (
        <section className={styles.sectionSlider}>
            <div className='container'>
                <div className={styles.containerTop}>
                    <h2 className={styles.title}>{title}</h2>
                    <Link to="/" className={styles.linkAll}>
                        <span>Смотреть всё</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="17" viewBox="0 0 10 17" fill="currentColor">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.26349 6.82637L1.43712 0L0 1.43712L6.82637 8.26349L5.94761e-05 15.0898L1.43718 16.5269L9.70063 8.26348L8.26351 6.82636L8.26349 6.82637Z" />
                        </svg>
                    </Link>
                </div>

                <Swiper
                    spaceBetween={30}
                    slidesPerView="auto"
                >
                    <SwiperSlide className={styles.slide}>
                        <Link to="/">
                            <div className={styles.imgWrapper}>
                                <img src={slideImg} />
                            </div>
                        </Link>
                        <div className={styles.linkWrapper}>
                            <Link to="/" className={styles.linkTitle}>sc</Link>
                            <Link to="/" className={styles.linkType}>Драма</Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                        <Link to="/">
                            <div className={styles.imgWrapper}>
                                <img src={slideImg} />
                            </div>
                        </Link>
                        <div className={styles.linkWrapper}>
                            <Link to="/" className={styles.linkTitle}>sc</Link>
                            <Link to="/" className={styles.linkType}>Драма</Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                        <Link to="/">
                            <div className={styles.imgWrapper}>
                                <img src={slideImg} />
                            </div>
                        </Link>
                        <div className={styles.linkWrapper}>
                            <Link to="/" className={styles.linkTitle}>sc</Link>
                            <Link to="/" className={styles.linkType}>Драма</Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                        <Link to="/">
                            <div className={styles.imgWrapper}>
                                <img src={slideImg} />
                            </div>
                        </Link>
                        <div className={styles.linkWrapper}>
                            <Link to="/" className={styles.linkTitle}>sc</Link>
                            <Link to="/" className={styles.linkType}>Драма</Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                        <Link to="/">
                            <div className={styles.imgWrapper}>
                                <img src={slideImg} />
                            </div>
                        </Link>
                        <div className={styles.linkWrapper}>
                            <Link to="/" className={styles.linkTitle}>sc</Link>
                            <Link to="/" className={styles.linkType}>Драма</Link>
                        </div>
                    </SwiperSlide>
                </Swiper >
            </div>
        </section>

    )
}

export default CategorySlider
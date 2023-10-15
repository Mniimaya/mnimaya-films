import React from 'react'
import MainButton from '../UI/MainButton'
import MainSlider from '../MainSlider/MainSlider'
import styles from './Intro.module.scss'
function Intro() {
    return (
        <section className={styles.section}>
            <div className={`container ${styles.container}`}>
                <MainSlider />
                <div className={styles.introContent}>
                    <h2 className={styles.content}>
                        Погрузитесь во вселенную <b>бесконечного</b> контента и каналов</h2>
                    <MainButton classAdd={styles.button} children="Начните бесплатно"></MainButton>
                </div>
            </div>
        </section>
    )
}

export default Intro
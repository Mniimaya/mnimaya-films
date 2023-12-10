import React from 'react'
import styles from './PosterFilm.module.scss'
import MainButton from '../UI/MainButton/MainButton'

function PosterFilm({ backdrop, name, description, countries, genres,
    movieLength, year, ageRating, rating }) {
    const renderArray = (array) => {
        if (array.length > 0) {
            const filterArray = array.map((item) => {
                return item.name
            })

            return filterArray.join(", ");
        }
    };


    const [isOpenDescription, setIsOpenDescription] = React.useState(false);
    return (
        <div className={styles.wrapper}>
            <div className={styles.imageWrapper}>
                <img src={backdrop.url} />
            </div>

            <div className={`container ${styles.descriptionWrapper}`}>
                <h1 className={styles.title}>{name}</h1>
                <p className={styles.features}>
                    <span>Оценка: {String(rating.kp).slice(0, 3)}</span>
                    <span>Производство: {
                        renderArray(countries)
                    }
                    </span>
                    <span>Жанр: {
                        renderArray(genres)
                    }
                    </span>
                    <span>Год выпуска: {year} г.</span>
                    <span>Время: {movieLength} мин.</span>
                    <span className={styles.age}>{ageRating
                    }+</span>
                </p>
                <p className={`${styles.description} ${isOpenDescription ? "active" : ""}`}>{description}</p>
                <button type='button' className={styles.buttonOpenDesc} onClick={() => { setIsOpenDescription(!isOpenDescription) }}>{isOpenDescription ? "Скрыть" : "Показать всё"}</button>


                <MainButton classAdd={styles.buttonWatch} type="submit" children="Смотреть сейчас" />
            </div>
        </div>
    )
}

export default PosterFilm
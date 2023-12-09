import React from 'react'
import LinkClient from '../UI/LinkClient/LinkClient'
import styles from './Footer.module.scss'
import { NavLink } from 'react-router-dom'
import { ReactComponent as IconArrow } from '../../assets/icons/radius-arrow.svg'
import LogoFooter from './LogoFooter'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContainer}`}>
                <ul className={styles.footerList}>
                    <li><LinkClient /></li>
                    <li><NavLink to="films">Фильмы</NavLink><IconArrow /></li>
                    <li><NavLink to="films">Сериалы</NavLink><IconArrow /></li>
                    <li><NavLink to="films">Каналы</NavLink><IconArrow /></li>
                    <li><NavLink to="films">Музыка</NavLink><IconArrow /></li>
                </ul>
                <LogoFooter className={styles.footerLogo} />
            </div>
        </footer>
    )
}

export default Footer
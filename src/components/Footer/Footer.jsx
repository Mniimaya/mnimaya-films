import React from 'react'
import LinkClient from '../UI/LinkClient/LinkClient'
import styles from './Footer.module.scss'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className='container'>
                <ul>
                    <li>
                        <LinkClient />
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
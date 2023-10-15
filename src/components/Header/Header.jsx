import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './Header.module.scss'
import logo from '../../assets/logo.svg'

function Header() {
    const [isOpen, setIsOpen] = React.useState(false);

    const handlerMobileMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <header>
            <div className={`container ${styles.container}`}>
                <Link to="/" className={styles.logoLink}>
                    <img src={logo} alt="Логотип." />
                </Link>
                <div className={`${styles.navContainer} ${isOpen ? styles.active : ""}`}>
                    <nav className={styles.nav}>
                        <NavLink to="films">Фильмы</NavLink>
                        <NavLink to="films">Сериалы</NavLink>
                        <NavLink to="films">Каналы</NavLink>
                        <NavLink to="films">Музыка</NavLink>
                    </nav>
                    <div className={styles.search}>
                        <label>
                            <button type="button">
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.5 21.8612L17.014 17.3672L21.5 21.8612ZM19.5 11.3612C19.5 13.6155 18.6045 15.7775 17.0104 17.3716C15.4163 18.9656 13.2543 19.8612 11 19.8612C8.74566 19.8612 6.58365 18.9656 4.98959 17.3716C3.39553 15.7775 2.5 13.6155 2.5 11.3612C2.5 9.10684 3.39553 6.94483 4.98959 5.35077C6.58365 3.75671 8.74566 2.86118 11 2.86118C13.2543 2.86118 15.4163 3.75671 17.0104 5.35077C18.6045 6.94483 19.5 9.10684 19.5 11.3612V11.3612Z" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </button>
                            <input type="search" placeholder="Поиск" />
                        </label>
                    </div>
                    <Link to="client" className={styles.linkClient}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 6C11.2583 6 10.5333 6.21993 9.91661 6.63199C9.29993 7.04404 8.81928 7.62971 8.53545 8.31494C8.25162 9.00016 8.17736 9.75416 8.32206 10.4816C8.46675 11.209 8.8239 11.8772 9.34835 12.4017C9.8728 12.9261 10.541 13.2833 11.2684 13.4279C11.9958 13.5726 12.7498 13.4984 13.4351 13.2145C14.1203 12.9307 14.706 12.4501 15.118 11.8334C15.5301 11.2167 15.75 10.4917 15.75 9.75C15.75 8.75544 15.3549 7.80161 14.6517 7.09835C13.9484 6.39509 12.9946 6 12 6ZM12 12C11.555 12 11.12 11.868 10.75 11.6208C10.38 11.3736 10.0916 11.0222 9.92127 10.611C9.75098 10.1999 9.70642 9.7475 9.79323 9.31105C9.88005 8.87459 10.0943 8.47368 10.409 8.15901C10.7237 7.84434 11.1246 7.63005 11.561 7.54323C11.9975 7.45642 12.4499 7.50097 12.861 7.67127C13.2722 7.84157 13.6236 8.12996 13.8708 8.49997C14.118 8.86998 14.25 9.30499 14.25 9.75C14.2494 10.3466 14.0122 10.9185 13.5903 11.3403C13.1685 11.7622 12.5966 11.9994 12 12Z" />
                            <path d="M12 1.5C9.9233 1.5 7.89323 2.11581 6.16652 3.26957C4.4398 4.42332 3.09399 6.0632 2.29927 7.98182C1.50455 9.90045 1.29661 12.0116 1.70176 14.0484C2.1069 16.0852 3.10693 17.9562 4.57538 19.4246C6.04383 20.8931 7.91476 21.8931 9.95156 22.2982C11.9884 22.7034 14.0996 22.4955 16.0182 21.7007C17.9368 20.906 19.5767 19.5602 20.7304 17.8335C21.8842 16.1068 22.5 14.0767 22.5 12C22.4968 9.2162 21.3896 6.54733 19.4211 4.57889C17.4527 2.61044 14.7838 1.50318 12 1.5ZM7.5 19.7828V18.75C7.5006 18.1534 7.73784 17.5815 8.15967 17.1597C8.5815 16.7378 9.15345 16.5006 9.75 16.5H14.25C14.8466 16.5006 15.4185 16.7378 15.8403 17.1597C16.2622 17.5815 16.4994 18.1534 16.5 18.75V19.7828C15.1344 20.5802 13.5814 21.0004 12 21.0004C10.4186 21.0004 8.86563 20.5802 7.5 19.7828ZM17.994 18.6945C17.9791 17.7107 17.5782 16.7722 16.8779 16.0812C16.1776 15.3901 15.2339 15.0019 14.25 15H9.75C8.76614 15.0019 7.82238 15.3901 7.12207 16.0812C6.42176 16.7722 6.02095 17.7107 6.006 18.6945C4.64593 17.4801 3.6868 15.8812 3.25563 14.1095C2.82446 12.3378 2.94158 10.477 3.59148 8.77339C4.24139 7.06978 5.39342 5.60375 6.89503 4.56942C8.39665 3.5351 10.177 2.98127 12.0004 2.98127C13.8237 2.98127 15.6041 3.5351 17.1057 4.56942C18.6073 5.60375 19.7594 7.06978 20.4093 8.77339C21.0592 10.477 21.1763 12.3378 20.7451 14.1095C20.314 15.8812 19.3548 17.4801 17.9948 18.6945H17.994Z" />
                        </svg>
                        Личный кабинет
                    </Link>
                </div>
                <button className={`${styles.buttonMenu} ${isOpen ? styles.active : ""}`} onClick={() => handlerMobileMenu()} type="button" title="Открыть или закрыть меню.">
                    <span></span>
                </button>
            </div>
        </header >
    )
}

export default Header
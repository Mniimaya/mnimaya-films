import React from 'react'

import styles from './MainButton.module.scss'

function MainButton({ children, classAdd, type }) {
    return (
        <button className={`${styles.btn} ${classAdd}`} type={type} > {children}</button >
    )
}

export default MainButton;
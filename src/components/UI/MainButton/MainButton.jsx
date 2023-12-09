import React from 'react'

import styles from './MainButton.module.scss'

function MainButton({ children, classAdd }) {
    return (
        <button className={`${styles.btn} ${classAdd}`} type="button" > {children}</button >
    )
}

export default MainButton;
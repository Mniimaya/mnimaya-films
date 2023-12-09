import React from 'react'
import styles from './Auth.module.scss'
import LogoFooter from '../../components/Footer/LogoFooter'
import RegistrationForm from '../../components/Forms/RegistrationForm'

function Registration() {
    return (
        <div className={`container ${styles.container}`}>
            <LogoFooter />
            <RegistrationForm />
        </div>
    )
}

export default Registration
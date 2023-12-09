import React from 'react'
import AuthForm from '../../components/Forms/AuthForm'
import LogoFooter from '../../components/Footer/LogoFooter'
import styles from './Auth.module.scss'

function Login() {
    return (
        <div className={`container ${styles.container}`}>
            <LogoFooter />
            <AuthForm />
        </div>
    )
}

export default Login
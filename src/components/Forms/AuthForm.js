import React from 'react'
import LabelInput from '../UI/Label/LabelInput'
import MainButton from '../UI/MainButton/MainButton'
import styles from './forms.module.scss'
import { NavLink } from 'react-router-dom'
function AuthForm() {
    return (
        <div className={styles.formContainer}>
            <form>
                <fieldset>
                    <LabelInput type="email" placeholder='Email' />
                    <LabelInput type="password" placeholder='Пароль' />
                </fieldset>
                <MainButton classAdd={styles.submit} type="submit" children="Войти" />
                <NavLink to="/registration" className={styles.link}>Ещё не зарегистрированы?</NavLink>
            </form>
        </div >
    )
}

export default AuthForm
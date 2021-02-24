import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

export const Header = (props) => {
    return (
        <header className={s.header}>
            <img
                src='https://latkaservis.com.ua/content/images/2/96207806519426_small2.jpg'
                alt='Logo'
            />
            <div className={s.login}>
                {props.isAuth ? props.login
                    : <NavLink to='/login'>Login</NavLink>
                }
            </div>
        </header>
    )
}

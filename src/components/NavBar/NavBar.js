import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './NavBar.module.css'

export const NavBar = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to={'/profile'} activeClassName={s.active}>
                    <img
                        alt='profile'
                        className={s.image}
                        src='https://img.icons8.com/ios/344/ffffff/user--v1.png'></img>
                        Profile
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.active}>
                    <img
                        alt='dialogs'
                        src='https://img.icons8.com/ios/344/ffffff/speech-bubble-with-dots.png'></img>
                    Dialogs
                </NavLink>
            </div>

            <div className={s.item}>
                <NavLink to='/users' activeClassName={s.active}>
                    <img
                        alt='users'
                        src='https://img.icons8.com/ios/344/ffffff/add-user-group-man-man--v1.png'></img>
                    Users
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.active}>
                    <img
                        alt='music'
                        src='https://img.icons8.com/ios/344/ffffff/apple-music.png'></img>
                    Music
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.active}>
                    <img
                        alt='news'
                        src='https://img.icons8.com/ios/344/ffffff/news.png'></img>
                    News
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.active}>
                    <img
                        alt='settings'
                        src='https://img.icons8.com/ios/344/ffffff/settings--v1.png'></img>
                    Settings
                </NavLink>
            </div>
        </nav>
    )
}

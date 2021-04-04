import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './NavBar.module.css'
import { useAuthState } from 'react-firebase-hooks/auth'
export const NavBar = ({ firebaseAuth, signOut, firestore, isOnline }) => {
    const [user] = useAuthState(firebaseAuth)

    const signOutFun = () => {
        isOnline(firestore, user, false).then(() => signOut(firebaseAuth))

    }

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to={'/profile'} activeClassName={s.active}>
                    <img
                        alt='profile'
                        className={s.image}
                        src='https://img.icons8.com/ios/344/ffffff/user--v1.png'></img>

                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.active}>
                    <img
                        alt='dialogs'
                        src='https://img.icons8.com/ios/344/ffffff/speech-bubble-with-dots.png'></img>

                </NavLink>
            </div>

            <div className={s.item}>
                <NavLink to='/users' activeClassName={s.active}>
                    <img
                        alt='users'
                        src='https://img.icons8.com/ios/344/ffffff/add-user-group-man-man--v1.png'></img>

                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.active}>
                    <img
                        alt='settings'
                        src='https://img.icons8.com/ios/344/ffffff/settings--v1.png'></img>
                </NavLink>
            </div>
            {user ? <div>
                <div className={s.signOut} onClick={signOutFun} ><img src='https://img.icons8.com/plasticine/2x/exit.png'></img></div>
            </div> : null}
        </nav>
    )
}

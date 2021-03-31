import React from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import s from './Header.module.css'
import { useAuthState } from 'react-firebase-hooks/auth'

export const Header = ({ firebaseAuth, getAuth, signOut }) => {
    const [Auth] = useAuthState(firebaseAuth)
    return (
        <header className={s.header}>
            <img
                src='https://img.icons8.com/plasticine/344/telegram-app.png'
                alt='Logo'

            />
            <div className={s.login}>
                {Auth ?
                    <div className={s.ifAuth}><img src={Auth.photoURL}></img></div>
                    : <div>
                        <NavLink to='/login'>Login</NavLink>
                        <NavLink to='signup' className={s.signup}>Sign Up</NavLink>
                    </div>
                }

            </div>
        </header >
    )
}

import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import s from './Profile.module.css'
export const Profile = ({ firebaseAuth, firestore, myData, ...props }) => {

    return (
        <div>
            <img className={s.image} src={myData.photoURL}></img>

            <div className={s.text}>Name: {myData.displayName}</div>
            <div className={s.text}>Email:{myData.email}</div>
            <div className={s.text}>Last signin time:{myData.metadata.lastSignInTime}</div>

        </div>
    )
}

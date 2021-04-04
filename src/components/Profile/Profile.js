import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import s from './Profile.module.css'
import message from '../../assets/img/messaging.png'
import more from '../../assets/img/more.png'
import { NavLink } from 'react-router-dom'
import { Loading } from '../commons/Loader/Loading'

export const Profile = ({ firebaseAuth, firestore, myData, userProfile, ...props }) => {

    if (!userProfile && !myData) {
        return <Loading />
    }


    return (
        <div>
            <div className={s.imageContainer}>
                <img className={s.image} src={userProfile ? userProfile.photoUrl : myData.photoURL}></img>
                <div className={s.name}>{userProfile ? userProfile.name : myData.displayName}</div>
            </div>
            <div className={s.boxContainer}>
                <div className={s.box}>
                    <NavLink to={'/dialogs'}>
                        <img src={message}></img>
                    </NavLink>
                </div>
                <div className={s.box}>
                    <img src={more}></img>
                </div>
            </div>
            <div className={s.aboutContainer}>
                <div className={s.infoContainer}>About me
                    <div className={s.info}>Admin</div>
                </div>
                <div className={s.infoContainer}>email
                    <div className={s.info}>{userProfile ? userProfile.email : myData.email}</div>
                </div>
                <div className={s.infoContainerLast}>Online status
                    <div className={s.info}>{userProfile ? userProfile.isOnline ? 'online' : 'offline' : 'online'}</div>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './User.module.css'

export const User = ({ user, followingInProgress, follow, unFollow }) => {
    let userPhoto = "https://img.icons8.com/ios/344/ffffff/test-account.png"
    return (
        <div key={user.id} className={styles.user}>
            <span>
                <div className={styles.userPhoto}>
                    <NavLink to={'/profile/' + user.id}>
                        <img
                            src={user.photos.small != null ? user.photos.small : userPhoto}
                            className={styles.photo}
                            alt='UsersImage'
                        />

                    </NavLink>
                </div>
                <div className={styles.divButton}>
                    {
                        user.followed
                            ? <button
                                className={styles.button}
                                disabled={followingInProgress.some(id => id === user.id)}
                                onClick={() => {
                                    unFollow(user.id)
                                }
                                }>Unfollow</button>
                            : <button
                                className={styles.button}
                                disabled={followingInProgress.some(id => id === user.id)}
                                onClick={() => {
                                    follow(user.id)
                                }
                                }>Folow</button>
                    }

                </div>
            </span>

            <div className={styles.info}>
                <div>Name: {user.name}</div>
                <div>Status: {user.status || 'noStatus'}</div>
            </div>
            {/* <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span> */}

        </div>
    )
}

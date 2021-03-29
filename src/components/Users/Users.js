import React from 'react'
import styles from './Users.module.css'
import { Loading } from '../commons/Loader/Loading'
import { Redirect } from 'react-router'


const Users = ({ sendMessage, myData, users, exists, ...props }) => {



    if (!users) {
        return <Loading />
    }
    if (exists) {
        return <Redirect to={'/dialogs'} />
    }
    return (
        <div className={styles.users}>
            { users.map((user) => myData.uid !== user.id ?
                <div key={user.id} className={styles.userContainer}>
                    <img src={user.photoUrl}></img>
                    <div>{user.name}</div>
                    <div className={styles.AddToFriendsButton} onClick={() => sendMessage(user)}>Send Message</div>
                </div>
                : null)

            }
        </div>
    )
}


export default Users;

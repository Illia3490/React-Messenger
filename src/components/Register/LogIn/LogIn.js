import React from 'react'
import styles from './../RegisterStyles.module.css'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Loading } from '../../commons/Loader/Loading'
import { Redirect } from 'react-router'
import firebase from 'firebase'

const LogIn = ({ loginWith, getAuthFirebase, firestore, ...props }) => {
    const [auth] = useAuthState(props.firebaseAuth)



    if (auth) {
        console.log(auth)
        return <Redirect to={'/dialogs'} />

    }

    return (
        <div className={styles.loginContainer}>
            <div className={styles.title}>Hi, log in to start...</div>
            <div className={styles.LogIn}>
                <img src="https://img.icons8.com/plasticine/344/google-logo.png" ></img>
                <button onClick={() => loginWith(firebase.auth.GoogleAuthProvider)}>Login with Google</button>
            </div>
            <div className={styles.LogIn}>
                <img src="https://img.icons8.com/plasticine/344/facebook.png" ></img>
                <button onClick={() => loginWith(firebase.auth.FacebookAuthProvider)} >Login with Facebook</button>
            </div>
        </div>
    )
}


export default LogIn
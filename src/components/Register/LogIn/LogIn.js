import React from 'react'
import styles from './../RegisterStyles.module.css'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Loading } from '../../commons/Loader/Loading'
import { Redirect } from 'react-router'
import firebase from 'firebase'

const LogIn = ({ firebaseAuth, loginWith, loginWithGoogle, loginWithFacebook, getAuthFirebase, firestore, ...props }) => {
    const [Auth] = useAuthState(firebaseAuth)


    if (Auth) {
        console.log(Auth)
        return <Redirect to={'/dialogs'} />

    }

    return (
        <div>
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
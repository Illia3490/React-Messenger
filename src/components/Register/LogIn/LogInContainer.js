import React, { Component } from 'react'
import { connect } from 'react-redux'
import firebase from 'firebase'
import LogIn from './LogIn'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'
import { isOnline } from '../../../redux/firebaseReducer'



const LogInContainer = (props) => {
    // const [user] = useAuthState()


    const loginWith = async (loginWithProvider) => {
        const provider = new loginWithProvider
        const userData = await props.firebaseAuth.signInWithPopup(provider)
        createNewUser(userData)
        props.isOnline(props.firestore, userData.user, true)
    }
    const createNewUser = async (user) => {
        if (user.additionalUserInfo.isNewUser) {
            props.firestore.collection('users').doc(user.user.uid)
                .set({
                    id: user.user.uid,
                    email: user.user.email,
                    name: user.user.displayName,
                    photoUrl: user.user.photoURL,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                    isOnline: true
                })

        }

    }

    return <>
        <LogIn
            loginWith={loginWith}
            firebaseAuth={props.firebaseAuth}
            getAuthFirebase={props.getAuthFirebase} />
    </>
}




const mapStateToProps = (state) => ({
    firebaseAuth: state.firebase.firebaseAuth,
    firestore: state.firebase.firestore,

})

export default connect(mapStateToProps, { isOnline })(LogInContainer)
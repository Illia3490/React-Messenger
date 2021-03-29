import React, { Component } from 'react'
import { connect } from 'react-redux'
import firebase from 'firebase'
import LogIn from './LogIn'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'



const LogInContainer = (props) => {
    const [users] = useCollectionData(props.firestore.collection('users'))


    const loginWith = async (loginWithProvider) => {
        const provider = new loginWithProvider
        const userData = await props.firebaseAuth.signInWithPopup(provider)
        createNewUser(userData)
    }
    const createNewUser = async (user) => {
        if (user.additionalUserInfo.isNewUser) {
            props.firestore.collection('users')
                .add({
                    id: user.user.uid,
                    name: user.user.displayName,
                    photoUrl: user.user.photoURL,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp()
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

export default connect(mapStateToProps, {})(LogInContainer)
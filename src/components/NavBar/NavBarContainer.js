import React, { Component } from 'react'
import { connect } from 'react-redux'
import firebase from 'firebase'

import { useCollectionData } from 'react-firebase-hooks/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'
import { NavBar } from './NavBar'
import { isOnline, signOut } from '../../redux/firebaseReducer'



const NavBarContainer = (props) => {


    return <>
        <NavBar
            firebaseAuth={props.firebaseAuth}
            signOut={props.signOut}
            firestore={props.firestore}
            isOnline={props.isOnline}
        />
    </>
}




const mapStateToProps = (state) => ({
    firebaseAuth: state.firebase.firebaseAuth,
    firestore: state.firebase.firestore,

})

export default connect(mapStateToProps, { signOut, isOnline })(NavBarContainer)
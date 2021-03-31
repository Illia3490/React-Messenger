import React, { Component } from 'react'
import { connect } from 'react-redux'
import firebase from 'firebase'

import { useCollectionData } from 'react-firebase-hooks/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'
import { NavBar } from './NavBar'
import { signOut } from '../../redux/firebaseReducer'



const NavBarContainer = (props) => {


    return <>
        <NavBar
            firebaseAuth={props.firebaseAuth}
            signOut={props.signOut}
        />
    </>
}




const mapStateToProps = (state) => ({
    firebaseAuth: state.firebase.firebaseAuth,
    firestore: state.firebase.firestore,

})

export default connect(mapStateToProps, { signOut })(NavBarContainer)
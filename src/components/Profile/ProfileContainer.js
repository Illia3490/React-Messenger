import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getUsers } from '../../redux/firebaseReducer';
import { useAuthState } from 'react-firebase-hooks/auth'
import { Profile } from './Profile';



const ProfileContainer = (props) => {
    const [myData] = useAuthState(props.firebaseAuth)

    return <>
        <Profile
            myData={myData}

        />
    </>
}




let mapStateToProps = (state) => ({
    users: state.firebase.users,
    firestore: state.firebase.firestore,
    firebaseAuth: state.firebase.firebaseAuth
})


export default compose(
    connect(mapStateToProps, {
        getUsers
    })
)(ProfileContainer)




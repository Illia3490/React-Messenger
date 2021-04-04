import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useAuthState } from 'react-firebase-hooks/auth'
import { Profile } from './Profile';
import { useCollectionData } from 'react-firebase-hooks/firestore'



const ProfileContainer = (props) => {
    const [myData] = useAuthState(props.firebaseAuth)
    const [users] = useCollectionData(props.firestore.collection('users').orderBy('createdAt'))
    const userProfile = users && users.find((users) => users.email === props.match.params.email)

    return <>
        <Profile
            myData={myData}
            userProfile={userProfile}
        />
    </>
}




let mapStateToProps = (state) => ({
    users: state.firebase.users,
    firestore: state.firebase.firestore,
    firebaseAuth: state.firebase.firebaseAuth
})


export default compose(
    connect(mapStateToProps, {}))(ProfileContainer)




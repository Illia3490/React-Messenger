import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import Users from './Users';
import { compose } from 'redux';
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'

import firebase from 'firebase'



const UsersContainer = (props) => {
    const [users] = useCollectionData(props.firestore.collection('users'))
    const [myData] = useAuthState(props.firebaseAuth)
    const [dialogs, loading] = useCollectionData(props.firestore.collection('dialogs'))
    const [exist, setExist] = useState(false)

    const sendMessage = (user) => {
        dialogs.map((d) => {
            if (!d.doc === myData.uid +
                myData.displayName.toUpperCase().replace(/\s/g, "")
                + '-' + user.name.toUpperCase().replace(/\s/g, "")
                + user.id && user.id +
                user.name.toUpperCase().replace(/\s/g, "")
                + '-' + myData.displayName.toUpperCase().replace(/\s/g, "")
                + myData.uid) {
                props.firestore.collection('dialogs')
                    .doc(myData.uid +
                        myData.displayName.toUpperCase().replace(/\s/g, "")
                        + '-' + user.name.toUpperCase().replace(/\s/g, "")
                        + user.id
                    )
                    .set({
                        id: user.id + myData.uid,
                        uid1: user.id,
                        uid2: myData.uid,
                        userPhoto: user.photoUrl,
                        myPhoto: myData.photoURL,
                        userName: user.name,
                        myName: myData.displayName,
                        doc: myData.uid +
                            myData.displayName.toUpperCase().replace(/\s/g, "")
                            + '-' + user.name.toUpperCase().replace(/\s/g, "")
                            + user.id,
                        createdAt: firebase.firestore.FieldValue.serverTimestamp()
                    })
                props.firestore.collection('dialogs')
                    .doc(myData.uid + myData.displayName.toUpperCase().replace(/\s/g, "")
                        + '-' + user.name.toUpperCase().replace(/\s/g, "")
                        + user.id)
                    .collection('messages')
            } else {
                setExist(!exist)
            }
        })

    }



    return <>
        <Users
            users={users}
            myData={myData}
            sendMessage={sendMessage}
            exist={exist}
        />
    </>
}




let mapStateToProps = (state) => ({
    firestore: state.firebase.firestore,
    firebaseAuth: state.firebase.firebaseAuth
})


export default compose(
    connect(mapStateToProps, {}))(UsersContainer)




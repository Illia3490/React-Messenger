import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import Users from './Users';
import { compose } from 'redux';
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { useCollection } from 'react-firebase-hooks/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'

import firebase from 'firebase'
import { Redirect } from 'react-router';



const UsersContainer = (props) => {
    const [users] = useCollectionData(props.firestore.collection('users').orderBy('createdAt'))
    const [myData] = useAuthState(props.firebaseAuth)
    const [dialogs, loading] = useCollectionData(props.firestore.collection('dialogs'))
    const [exist, setExist] = useState(false)
    const [success, setSuccess] = useState(false)
    const useChatRef = props.firestore.collection('dialogs').where('users', 'array-contains', myData.email)
    const [chatSnaphot] = useCollection(useChatRef)


    const sendMessage = (user) => {

        if (!chatAlreadyExists(user.email) && user.email !== myData.email) {
            props.firestore.collection('dialogs')
                .doc(myData.displayName.toUpperCase().replace(/\s/g, "")
                    + myData.uid
                    + '-' + user.name.toUpperCase().replace(/\s/g, "")
                    + user.id
                )
                .set({
                    id: user.id + myData.uid,
                    users: [myData.email, user.email],
                    userPhoto: user.photoUrl,
                    myPhoto: myData.photoURL,
                    userName: user.name,
                    myName: myData.displayName,
                    doc1: myData.displayName.toUpperCase().replace(/\s/g, "")
                        + myData.uid
                        + '-' + user.name.toUpperCase().replace(/\s/g, "")
                        + user.id,
                    doc2: user.name.toUpperCase().replace(/\s/g, "")
                        + user.id
                        + '-' + myData.displayName.toUpperCase().replace(/\s/g, "")
                        + myData.uid,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp()
                })
            setSuccess(true)
        } else {
            setExist(true)
        }

    }

    const chatAlreadyExists = (recipientEmail) =>
        !!chatSnaphot?.docs.find(chat =>
            chat.data().users.find(user => user === recipientEmail)?.length > 0)

    return <>
        <Users
            users={users}
            myData={myData}
            sendMessage={sendMessage}
            exist={exist}
            success={success}
            dialogs={dialogs}
        />
    </>
}



let mapStateToProps = (state) => ({
    firestore: state.firebase.firestore,
    firebaseAuth: state.firebase.firebaseAuth
})


export default compose(
    connect(mapStateToProps, {}))(UsersContainer)




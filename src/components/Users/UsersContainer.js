import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import Users from './Users';
import { compose } from 'redux';
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'

import firebase from 'firebase'
import { Redirect } from 'react-router';



const UsersContainer = (props) => {
    const [users] = useCollectionData(props.firestore.collection('users'))
    const [myData] = useAuthState(props.firebaseAuth)
    const [dialogs, loading] = useCollectionData(props.firestore.collection('dialogs'))
    const [exist, setExist] = useState(false)
    const [success, setSuccess] = useState(false)
    // dialog.doc1 === myData.displayName.toUpperCase().replace(/\s/g, "")
    //     + myData.uid + '-' + user.name.toUpperCase().replace(/\s/g, "") + user.id
    //     || dialog.doc2 === myData.displayName.toUpperCase().replace(/\s/g, "")
    //     + myData.uid + '-' + user.name.toUpperCase().replace(/\s/g, "") + user.id
    const sendMessage = (user) => {
        {
            dialogs.map(dialog =>
                (dialog.uid1 === myData.uid && dialog.uid2 === user.id) || (dialog.uid2 === myData.uid && dialog.uid1 === user.id) ?
                    alert('dialog Exist')
                    :
                    props.firestore.collection('dialogs')
                        .doc(myData.displayName.toUpperCase().replace(/\s/g, "")
                            + myData.uid
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
                //     props.firestore.collection('dialogs')
                // .doc(myData.displayName.toUpperCase().replace(/\s/g, "")
                //     + myData.uid
                //     + '-' + user.name.toUpperCase().replace(/\s/g, "")
                //     + user.id)
                // .collection('messages')
            )
        }

    }



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




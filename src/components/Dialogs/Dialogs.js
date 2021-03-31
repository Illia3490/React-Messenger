import React, { useEffect, useState } from 'react'
import s from './Dialogs.module.css'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'
import Messages from './messages/Messages'



export const Dialogs = ({ firestore, firebaseAuth }) => {
    const [doc, setDoc] = useState('CHOSECHAT')
    const [myDialogs, setMyDialogs] = useState([])
    const [user] = useAuthState(firebaseAuth)
    const [userData] = useCollectionData(firestore.collection('users'))


    useEffect(() => {
        const getDialogs = firestore.collection('dialogs').onSnapshot((snapshot) =>
            setMyDialogs(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        )
        return getDialogs
    }, [])



    return (
        <div className={s.dialogsPage}>
            <div className={s.dialogsContainer}>
                <div className={s.title}>Chats</div>
                <div className={s.dialogs_list}>
                    {(myDialogs && user) ? myDialogs.map(({ data }) => (data.uid1 === user.uid || data.uid2 === user.uid) && userData ?
                        <div key={data.createdAt} className={s.dialogs} onClick={() => setDoc(data)}>
                            <img src={data.userPhoto === user.photoURL ? data.myPhoto : data.userPhoto}
                            ></img >
                            <div className={s.dialogsName}>{data.userName === user.displayName ? data.myName : data.userName}</div>

                        </div >
                        : null) : null}
                </div>
            </div>
            <div className={s.messagesContainer}>
                {<Messages firestore={firestore} firebaseAuth={firebaseAuth} doc={doc} />}
            </div>
        </div>
    )
}

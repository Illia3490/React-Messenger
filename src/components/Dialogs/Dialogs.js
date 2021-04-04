import React, { useEffect, useState } from 'react'
import s from './Dialogs.module.css'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'
import Messages from './messages/Messages'
import { Loading } from '../commons/Loader/Loading'
import { Profile } from '../Profile/Profile'



export const Dialogs = ({ firestore, firebaseAuth }) => {
    const [doc, setDoc] = useState('CHOSECHAT')
    const [myDialogs, setMyDialogs] = useState([])
    const [user] = useAuthState(firebaseAuth)
    const [userData] = useCollectionData(firestore.collection('users'))


    useEffect(() => {
        const getDialogs = firestore.collection('dialogs').orderBy('createdAt').onSnapshot((snapshot) =>
            setMyDialogs(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        )
        return getDialogs
    }, [])

    if (!user) {
        return <Loading />
    }


    return (
        <div className={s.dialogsPage}>
            <div className={s.dialogsContainer}>
                <div className={s.title}>Chats</div>
                <div className={s.dialogs_list}>
                    {(myDialogs && user) ? myDialogs.map(({ data }) => (data.myPhoto === user.photoURL || data.userPhoto === user.photoURL) && userData ?
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
                {/* <Profile /> */}
            </div>
        </div>
    )
}

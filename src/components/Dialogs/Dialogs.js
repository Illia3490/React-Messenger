import React, { useState } from 'react'
import s from './Dialogs.module.css'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { Loading } from '../commons/Loader/Loading'
import firebase from 'firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import Messages from './messages/Messages'



export const Dialogs = ({ firestore, firebaseAuth }) => {
    const [doc, setDoc] = useState('ELB-ІЛЛЯДОМАРАЦЬКИЙI8qECRKDZ3UVpf7QGbTI2UsKlci2')
    const [user] = useAuthState(firebaseAuth)
    const [dialogs, loading] = useCollectionData(firestore.collection('dialogs'))
    const [userData] = useCollectionData(firestore.collection('users'))



    return (
        <div>
            {dialogs && user ? dialogs.map(d => d.uid1 === user.uid || d.uid2 === user.uid && userData ?
                <div key={d.doc}>
                    <div className={s.dialogs} onClick={() => setDoc(d.doc)}>
                        <img src={d.userPhoto === user.photoURL ? d.myPhoto : d.userPhoto}
                        ></img >
                        <div className={s.dialogsName}>{d.userName === user.displayName ? d.myName : d.userName}</div>
                    </div >
                    <div className={s.componentContainer}  >
                        <Messages firestore={firestore} firebaseAuth={firebaseAuth} doc={doc} />
                    </div>
                </div>

                : <div className={s.componentContainer} key={user.uid}>
                    <Messages firestore={firestore} firebaseAuth={firebaseAuth} doc={doc} />
                </div>
            )
                : null}
        </div>
    )
}

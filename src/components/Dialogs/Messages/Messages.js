import React, { useState } from 'react'
import s from '../Dialogs.module.css'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { Loading } from '../../commons/Loader/Loading'
import firebase from 'firebase'
import { useAuthState } from 'react-firebase-hooks/auth'



const Messages = ({ firestore, firebaseAuth, doc, userData }) => {
    const [user] = useAuthState(firebaseAuth)
    const [messages] = useCollectionData(
        firestore.collection('dialogs')
            .doc(doc)
            .collection('messages')
            .orderBy('createdAt')
    )
    const [value, setValue] = useState('')
    // const [messages, loading] = useCollectionData(firestore.collection('messages').orderBy('createdAt'))


    const sendMessage = async () => {
        firestore.collection('dialogs').doc(doc).collection('messages')
            .add({
                id: user.uid,
                name: user.displayName,
                text: value,
                photoUrl: user.photoURL,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            })
        setValue('')
    }
    const getDate = (Date) => {
        let minutes = Date.getMinutes()
        let hours = Date.getHours()
        if (minutes <= 9) {
            return `${Date.getHours()}:0${Date.getMinutes()}`
        } else if (hours <= 9) {
            return `${Date.getHours()}:${Date.getMinutes()}`
        } else {
            return `${Date.getHours()}:${Date.getMinutes()}`
        }
    }

    if (!messages) {
        <Loading />
    }
    return (
        <div className={s.dialogsContainer}>

            <span className={s.messagesContainer}>
                {user && messages ? messages.map(m =>
                    <div className={s.messageContainer} key={m.createdAt} >
                        <div className={s.message}>
                            <img src={m.photoUrl}></img>
                            <div className={s.name}>{m.name}</div>
                            <div className={s.messageText}>
                                {m.text}
                            </div>
                            <div className={s.time}>
                                {m.createdAt ? getDate(m.createdAt.toDate()) : null}
                            </div>
                        </div>
                    </div>
                )
                    :
                    null
                }
            </span>
            <div className={s.inputContainer}>
                <textarea
                    placeholder='Enter message'
                    className={s.textArea}
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}></textarea>
                <button onClick={() => !value.startsWith(' ') && messages ? sendMessage() : console.log('zeroMessage')} className={s.sendButton}>
                    <img src="https://img.icons8.com/nolan/2x/filled-sent.png"></img>
                </button>
            </div>
        </div>
    )
}
export default Messages;
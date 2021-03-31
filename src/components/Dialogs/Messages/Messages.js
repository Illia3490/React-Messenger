import React, { useLayoutEffect, useState } from 'react'
import s from './Messages.module.css'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { Loading } from '../../commons/Loader/Loading'
import firebase from 'firebase'
import { useAuthState } from 'react-firebase-hooks/auth'



const Messages = ({ firestore, firebaseAuth, doc, userData }) => {
    const [user] = useAuthState(firebaseAuth)
    const [myMessages, setMyMessages] = useState([])
    const [value, setValue] = useState('')

    useLayoutEffect(() => {
        const getMessages = firestore.collection('dialogs').doc(doc.doc1)
            .collection('messages').orderBy('createdAt').onSnapshot((snapshot) =>
                setMyMessages(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
                )
            )
        return getMessages
    }, [doc])


    const sendMessage = async () => {
        firestore.collection('dialogs').doc(doc.doc1).collection('messages')
            .add({
                id: user.uid,
                name: user.displayName,
                text: value,
                photoUrl: user.photoURL,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            })
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



    if (!myMessages) {
        <Loading />
    }
    return (
        <div className={s.chatContainer}>
            {doc !== 'CHOSECHAT' &&
                <div className={s.messagesContainer}>
                    <div className={s.heder}>
                        <img src={doc.userPhoto}></img>
                        <div className={s.name}>{doc.userName}</div>
                    </div>
                    {user && myMessages ? myMessages.map(({ data }) =>
                        <div className={s.messages} key={data.createdAt} >
                            <div className={s.message}>
                                <img src={data.photoUrl}></img>
                                <div className={s.name}>{data.name}</div>
                                <div className={s.time}>
                                    {data.createdAt ? getDate(data.createdAt.toDate()) : null}
                                </div>
                                <div className={s.messageText}>
                                    {data.text}
                                </div>

                            </div>
                        </div>

                    )
                        :
                        null
                    }

                </div>
            }
            {doc !== 'CHOSECHAT' &&
                <div className={s.inputContainer}>
                    <input
                        placeholder='Enter message'
                        className={s.input}
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}></input>
                    <button onClick={() => !value.startsWith(' ') && myMessages && value.length > 0 ? sendMessage() : console.log('zeroMessage')} className={s.sendButton}>
                        <img src="https://img.icons8.com/nolan/2x/filled-sent.png"></img>
                    </button>
                </div>
            }
        </div>
    )
}
export default Messages;
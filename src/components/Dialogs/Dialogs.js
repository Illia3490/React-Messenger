import React from 'react'
import { Redirect } from 'react-router-dom'
import { AddMessageFormRedax } from './AddMessageForm'
import s from './Dialogs.module.css'
import { DialogsItems } from './DialogsItems/DialogsItems'
import { Messages } from './Messages/Messages'



export const Dialogs = (props) => {
    let dialogsItem = props.messagesPage.dialogs.map(dialog => <DialogsItems name={dialog.name} id={dialog.id} />)

    let messagesData = props.messagesPage.messages.map(message => <Messages message={message.message} />)

    let newMessageText = props.messagesPage.newMessageText
    const addNewMessage = (value) => {
        props.sendMessage(value.newMessageBady)
    }

    if (!props.isAuth) return <Redirect to={'/login'} />
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsItem}
            </div>
            <div className={s.messages}>
                <div>{messagesData}</div>
                <AddMessageFormRedax
                    newMessageText={newMessageText}
                    updateNewMessageText={props.updateNewMessageText}
                    sendMessage={props.sendMessage}
                    onSubmit={addNewMessage}
                />
            </div>

        </div>
    )
}

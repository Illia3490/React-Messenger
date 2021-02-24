import React from 'react'
import s from './../Dialogs.module.css'

export const Messages = (props) => {


    return (
        <div>
            <div className={s.message}>{props.message}</div>
        </div>
    )
}

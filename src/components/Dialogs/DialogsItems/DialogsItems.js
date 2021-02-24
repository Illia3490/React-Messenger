import React from 'react'
import s from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom'

export const DialogsItems = (props) => {

    return (
        <div>
            <div className={s.dialog}>
                <img
                    src='https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg'
                    className={s.dialogImage}
                    alt='DialogsImage'
                />
                <NavLink to={'/dialogs/' + props.id} activeClassName={s.active}>{props.name}</NavLink>
            </div>
        </div>
    )
}
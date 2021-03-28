import React from 'react'
import loading from '../../../assets/loading.gif'
import style from './Loading.module.css'
export const Loading = () => {
    return (
        <div className={style.loading} >
            <img src={loading} alt='Loading'></img>
        </div>
    )
}

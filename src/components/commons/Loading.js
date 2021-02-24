import React from 'react'
import loading from '../../assets/loading.gif'

export const Loading = () => {
    return (
        <div >
            <img src={loading} style={{ width: 100, height: 100 }} alt='Loading'></img>
        </div>
    )
}

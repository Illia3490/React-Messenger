import React, { useState } from 'react'
import style from './Paginator.module.css'

export const Paginator = ({ currentPage, onPageChanged, totalUserCount, pageSize, portionSize = 10 }) => {
    let pageCount = Math.ceil(totalUserCount / pageSize)
    let portionCount = Math.ceil(pageCount / portionSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    let [numberPortion, setNumberPortion] = useState(1)
    let [mouseMovePrevious, serMouseMovePrevious] = useState(false)
    let [mouseMoveNext, setMouseMoveNext] = useState(false)
    let leftBorder = (numberPortion - 1) * portionSize + 1;
    let rightBorder = numberPortion * portionSize;


    let buttonDisable = (disable) => {
        return (
            <button
                disabled={disable}
                onMouseMove={() => serMouseMovePrevious(true)}
                onMouseLeave={() => serMouseMovePrevious(false)}
                onMouseDown={() => serMouseMovePrevious(false)}
                className={mouseMovePrevious && style.buttonActive || disable && style.buttonDisabled || style.button}
                onClick={() => setNumberPortion(numberPortion - 1)}><img src={"https://img.icons8.com/ios/344/ffffff/back--v1.png"} ></img></button>
        )
    }

    return (
        <div className={style.paginator}>
            <div >
                {numberPortion > 1 ? buttonDisable(false) : buttonDisable(true)}
            </div>
            <div className={style.pages}>
                {pages
                    .filter(p => p >= leftBorder && p <= rightBorder)
                    .map(p => {
                        return <div
                            key={p}
                            className={currentPage === p && style.selectedPage || style.page}
                            onClick={() => { onPageChanged(p) }}>{p} </div>
                    })}
            </div>
            <div >
                {portionCount > numberPortion &&
                    <button
                        onMouseMove={() => setMouseMoveNext(true)}
                        onMouseLeave={() => setMouseMoveNext(false)}
                        onMouseDown={() => setMouseMoveNext(false)}
                        className={mouseMoveNext && style.buttonActive || style.button}
                        onClick={() => setNumberPortion(numberPortion + 1)}><img src={"https://img.icons8.com/ios/344/ffffff/forward--v1.png"} ></img></button>}
            </div>
        </div>
    )
}

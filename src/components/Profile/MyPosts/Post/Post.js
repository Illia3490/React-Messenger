import React from 'react'
import s from './Post.module.css'

export const Post = (props) => {
    return (
        <div className={s.post}>
            <img
                src='https://www.monstersandcritics.com/wp-content/uploads/2020/01/baby-jabba-the-hutt-the-mandalorian-baby-yoda-new-friend.jpg'
                alt='PostImage'
            />
            {props.message}
            <div>
                <span>{props.likes} likes</span>
            </div>

        </div>

    )
}

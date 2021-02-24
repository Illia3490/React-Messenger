import React from 'react'
import { AddPostFormRedux } from './AddPostForm'
import s from './MyPost.module.css'
import { Post } from './Post/Post'

export const MyPost = (props) => {

    let postItems = props.posts.map(post => <Post message={post.message} likes={post.likes} />)


    const addNewPost = (value) => {
        props.addPost(value.newPostBady)
    }


    return (
        <div className={s.newPost}>
            <div className={s.myPost}>
                <AddPostFormRedux onSubmit={addNewPost} />
            </div>
            <div>
                {postItems}
            </div>


        </div>

    )
}

import React from 'react'
import { Field, reduxForm } from "redux-form"

export const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newPostBady'} component={'textarea'} placeholder={'Add Post'} />
            </div>
            <div>
                <button >Add</button>
            </div>
        </form>
    )
}

export const AddPostFormRedux = reduxForm({ form: 'profileAddPostBudy' })(AddPostForm)

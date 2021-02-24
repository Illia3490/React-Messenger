import React from 'react'
import { Field, reduxForm } from 'redux-form'
export const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newMessageBady'} placeholder='Text message!' />
            </div>
            <div><button> Send </button></div>
        </form>

    )
}

export const AddMessageFormRedax = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)
import React from 'react'
import { reduxForm } from 'redux-form'
import { Field } from 'redux-form'

export const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field name={"login"} component={"input"} placeholder={"Login"} />
                </div>
                <div>
                    <Field name={"passvord"} component={"input"} placeholder={"Password"} />
                </div>
                <div>
                    <Field name={"rememberMe"} component={"input"} type={"checkbox"} /> Remember me
                </div>
                <div>
                    <button  >Login</button>
                </div>
            </form>
        </div>
    )
}
export const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}


export default Login;
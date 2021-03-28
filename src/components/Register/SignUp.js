import axios from 'axios'
import React, { useState } from 'react'
import styles from './RegisterStyles.module.css'

const SignUp = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        }
        axios.post('http://localhost:3000/signup', data).then(
            response => {
                console.log(response)
            }
        ).catch(err => { console.log(err) })
    }

    return (
        <div className={styles.forms}>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit} >
                <div className={styles.form}>
                    <label>First Name</label>
                    <input onChange={(e) => setFirstName(e.target.value)} type="text" className={styles.input} placeholder='First Name'></input>
                </div>
                <div className={styles.form}>
                    <label>Last Name</label>
                    <input onChange={(e) => setLastName(e.target.value)} type="text" className={styles.input} placeholder='Last Name'></input>
                </div>
                <div className={styles.form}>
                    <label>Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="text" className={styles.input} placeholder='Email'></input>
                </div>
                <div className={styles.form}>
                    <label>Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" className={styles.input} placeholder='Password'></input>
                </div>
                <div className={styles.form}>
                    <label>Confirm Password</label>
                    <input onChange={(e) => setConfirmPassword(e.target.value)} type="password" className={styles.input} placeholder='Confirm Password'></input>
                </div>
                <button type="SignUp">SignUp</button>
            </form>
        </div>
    )
}

export default SignUp;
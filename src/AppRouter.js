import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Redirect, Route, Switch } from 'react-router'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import LogInContainer from './components/Register/LogIn/LogInContainer'
import UsersContainer from './components/Users/UsersContainer'

const AppRouter = ({ firebaseAuth }) => {
    const [user] = useAuthState(firebaseAuth)
    // const user = false
    return user ? (
        <Switch>
            <Route path="/dialogs" component={DialogsContainer} />
            <Route path="/profile" component={ProfileContainer} />
            <Route path="/users" component={UsersContainer} />

            <Redirect to={'/dialogs'} />
        </Switch>
    )
        :
        (
            <Switch>
                <Route path="/login" component={LogInContainer} />
                <Redirect to={'/login'} />
            </Switch>
        )
}
export default AppRouter;
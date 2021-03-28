import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Redirect, Route, Switch } from 'react-router'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import LogIn from './components/Register/LogIn/LogIn'
import UsersContainer from './components/Users/UsersContainer'

const AppRouter = ({ firebaseAuth }) => {
    const [user] = useAuthState(firebaseAuth)
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
                <Route path="/login" component={LogIn} />
                <Redirect to={'/login'} />
            </Switch>
        )
}
export default AppRouter;
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAuth, setAuth, signOut } from '../../redux/firebaseReducer'
import { Header } from './Header'


class HeaderContainer extends Component {

    componentDidMount() {
        this.props.getAuth(this.props.userData)
    }


    render() {
        return <Header
            getAuth={this.props.getAuth}
            firebaseAuth={this.props.firebaseAuth}
            signOut={this.props.signOut}
        />
    }
}

let mapStateToProps = (state) => ({
    firebaseAuth: state.firebase.firebaseAuth,
    userData: state.firebase.userData,
})

export default connect(mapStateToProps, { getAuth, signOut })(HeaderContainer)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signOut } from '../../redux/firebaseReducer'
import { Header } from './Header'


class HeaderContainer extends Component {

    render() {
        return <Header firebaseAuth={this.props.firebaseAuth} signOut={this.props.signOut} />
    }
}

let mapStateToProps = (state) => ({
    firebaseAuth: state.firebase.firebaseAuth,
})

export default connect(mapStateToProps, { signOut })(HeaderContainer)
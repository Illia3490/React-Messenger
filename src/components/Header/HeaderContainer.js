import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAuth } from '../../redux/authReducer'
import { Header } from './Header'

class HeaderContainer extends Component {

    componentDidMount() {
        this.props.getAuth()
    }

    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, { getAuth })(HeaderContainer) 
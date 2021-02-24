import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Profile } from './Profile'
import { getProfile, getStatus, updateStatus } from '../../redux/profileReducer'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
class ProfileContainer extends Component {

    componentDidMount() {
        this.props.getProfile(this.props.match.params.userId)
        this.props.getStatus(this.props.match.params.userId)
    }

    render() {
        return <Profile {...this.props} status={this.props.status} updateStatus={this.props.updateStatus} />
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})


export default compose(
    // withAuthRedirect,
    withRouter,
    connect(mapStateToProps, { getProfile, getStatus, updateStatus })
)(ProfileContainer)
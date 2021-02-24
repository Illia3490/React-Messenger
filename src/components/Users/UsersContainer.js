import React, { Component } from 'react'
import { connect } from 'react-redux';
import { follow, getUsers, setCurrentPageAC, setDisableButtonAC, unFollow } from '../../redux/usersReducer';
import Users from './Users';
import { Loading } from '../commons/Loading';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';


class UsersContainer extends Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        // this.props.setCurrentPageAC(pageNumber)
        this.props.getUsers(this.props.currentPage, this.props.pageSize, pageNumber)
    }

    render() {
        return <>
            {this.props.isLoading ? <Loading />
                : <Users
                    onPageChanged={this.onPageChanged}
                    totalUserCount={this.props.totalUserCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    follow={this.props.follow}
                    unFollow={this.props.unFollow}
                    followingInProgress={this.props.followingInProgress}
                />}
        </>
    }

}


let mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        isLoading: state.usersPage.isLoading,
        followingInProgress: state.usersPage.followingInProgress
    }
}
// let mapDispatchToProps = (dispatch) => {
//     return {
//         onFollow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         onUnFollow: (userId) => {
//             dispatch(unFollowAC(userId))
//         },
//         onSetUser: (users) => {
//             dispatch(setUserAC(users))
//         },
//         onSetTotalUsersCount: (countUsers) => {
//             dispatch(setTotalUsersCountAC(countUsers))
//         },
//         onSetCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         onSetIsLoading: (isLoading) => {
//             dispatch(setIsLoadingAC(isLoading))
//         }
//     }
// }

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        setCurrentPageAC,
        setDisableButtonAC,
        getUsers,
        follow,
        unFollow
    })
)(UsersContainer)




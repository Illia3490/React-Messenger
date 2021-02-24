import React from 'react'
import MyPostContainer from './MyPosts/MyPostContainer'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'

export const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} updateStatus={props.updateStatus} status={props.status} />
            <MyPostContainer />
        </div>
    )
}

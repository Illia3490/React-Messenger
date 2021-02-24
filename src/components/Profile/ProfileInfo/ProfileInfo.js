import React from 'react'
import { Loading } from '../../commons/Loading'
import s from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus'

export const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Loading />
    }

    return (
        <div>
            <div>
                <img
                    src='https://freehtmlthemes.ru/assets/images/articles/css-fon.jpg'
                    className={s.backgraundImg}
                    alt='AvatarBackground'
                />
            </div>
            <div>
                <img
                    src={props.profile.photos.large || 'https://upload.wikimedia.org/wikipedia/commons/2/2f/No-photo-m.png'}
                    className={s.logoImg}
                    alt='Avatar'
                />
                <div>
                    {props.profile.fullName}
                </div>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
                <div>
                    {props.profile.contacts.instagram}
                    {props.profile.lookingForAJob ? ' I search a job' : null}
                </div>
            </div>
        </div>
    )
}

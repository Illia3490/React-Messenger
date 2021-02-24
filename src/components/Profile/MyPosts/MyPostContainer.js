import { connect } from 'react-redux'
import { compose } from 'redux'
import { addPost } from '../../../redux/profileReducer'
import { MyPost } from './MyPost'

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
// let mapDispatchToProps = (dispatch) => {
//     return {
//         addPost: (value) => {
//             dispatch(addPostActionCreator(value))
//         },
//         onChangeTextPost: (text) => {
//             dispatch(updateNewPostText(text))
//         }
//     }
// }

export default compose(
    connect(mapStateToProps, { addPost })
)(MyPost)
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Dialogs } from './Dialogs';

// class DialogsContainer extends Component {
//     render() {
//         return <Dialogs
//             sendMessage={sendMessage}
//             updateNewMessageText={updateNewMessageText}
//             messagesPage={this.props.messagesPage}
//             isAuth={this.props.isAuth}
//         />
//     }
// }


let mapStateToProps = (state) => {
    return {
        firebaseAuth: state.firebase.firebaseAuth,
        firestore: state.firebase.firestore,
        userData: state.firebase.userData,
    }
}
// let mapDispatchToProps = (dispatch) => {
//     return {
//         onSendMessageClick: () => {
//             dispatch(sendMessage())
//         },
//         onNewMessageText: (body) => {
//             dispatch(updateNewMessageText(body))
//         }
//     }
// }

export default compose(
    connect(mapStateToProps, {}),
)(Dialogs)
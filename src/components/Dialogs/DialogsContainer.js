import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { sendMessage } from '../../redux/dialogsReducer';
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
        messagesPage: state.messagesPage,
        isAuth: state.auth.isAuth,
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
    connect(mapStateToProps, { sendMessage }),
    withAuthRedirect
)(Dialogs)
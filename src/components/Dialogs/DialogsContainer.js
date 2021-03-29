import { connect } from 'react-redux';
import { compose } from 'redux';
import { Dialogs } from './Dialogs';

const DialogsContainer = (props) => {

    return <Dialogs
        firebaseAuth={props.firebaseAuth}
        firestore={props.firestore}
    />
}


let mapStateToProps = (state) => {
    return {
        firebaseAuth: state.firebase.firebaseAuth,
        firestore: state.firebase.firestore,
        userData: state.firebase.userData,
    }
}


export default compose(
    connect(mapStateToProps, {}),
)(DialogsContainer)
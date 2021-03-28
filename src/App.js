import React from 'react'
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import HeaderContainer from './components/Header/HeaderContainer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Loading } from './components/commons/Loader/Loading'
import AppRouter from './AppRouter';
import { useAuthState } from 'react-firebase-hooks/auth'


const App = (props) => {

  const [Auth, loading, error] = useAuthState(props.firebaseAuth)
  if (loading) {
    return <Loading />
  }
  return (
    <div className="App">
      <HeaderContainer />
      <NavBar />
      <div className="AppContent">
        <AppRouter firebaseAuth={props.firebaseAuth} />
      </div>

    </div>
  );
}


const mapStateToProps = (state) => ({
  firebaseAuth: state.firebase.firebaseAuth
})

export default compose(
  // withAuthRedirect,

  connect(mapStateToProps, {})
)(App)

import React from 'react';
import { connect } from 'react-redux';
import SignIn from './SignIn';
import Page from './Page';


function App (props) {
  const { isAuthorized } = props;
  return(
    isAuthorized ?
      <Page /> :
      <SignIn />
  )
}
export default connect(
  (state) =>({isAuthorized: state.account.isAuthorized}),
  {},
)(App);
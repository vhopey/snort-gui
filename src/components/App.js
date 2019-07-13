import React from 'react';
import { connect } from 'react-redux';
import SignIn from './SignIn';
import Page from './Page';



class App extends React.Component {
  render() {
    const { isAuthorized } = this.props;
    return(
      // isAuthorized ? 
        <Page /> 
        // <SignIn />
    )
  }
}
export default connect(
  (state) =>({isAuthorized: state.account.isAuthorized}),
  {},
)(App);
import React, { Component } from 'react';

class User extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.firebase.auth().onAuthStateChanged( user => {
      this.props.setUser(user);
    });
  }

  displayUser() {
    if (this.props.activeUser == null) {
      return ("Guest");
    } else {
        return (this.props.activeUser.displayName);
    };
  }

  render() {
    return (
      <section className="sign-in">
        <input type="button" value="Sign in" onClick={(e) => this.props.handleSignIn(e)} />
        <input type="button" value="Sign Out" onClick={(e) => this.props.handleSignOut(e)} />
        <p>
          Currently signed in as: {this.displayUser()}
        </p>
      </section>
    );
  }
}

export default User;

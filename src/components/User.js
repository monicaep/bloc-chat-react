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

  handleSignIn(e) {
    const provider = new this.props.firebase.auth.GoogleAuthProvider();
    this.props.firebase.auth().signInWithPopup( provider );
  }

  handleSignOut(e) {
    this.props.firebase.auth().signOut();
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
        <input type="button" value="Sign in" onClick={(e) => this.handleSignIn(e)} />
        <input type="button" value="Sign Out" onClick={(e) => this.handleSignOut(e)} />
        <p>
          Currently signed in as: {this.displayUser()}
        </p>
      </section>
    );
  }
}

export default User;

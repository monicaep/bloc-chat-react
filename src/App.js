import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList'
import MessageList from './components/MessageList'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBADbW1igpUkg7rsxxPqqzVzRSG1wbQ76s",
    authDomain: "bloc-chat-react-d9e6c.firebaseapp.com",
    databaseURL: "https://bloc-chat-react-d9e6c.firebaseio.com",
    projectId: "bloc-chat-react-d9e6c",
    storageBucket: "bloc-chat-react-d9e6c.appspot.com",
    messagingSenderId: "302018258901"
  };
  firebase.initializeApp(config);

class App extends Component {

  render() {
    return (
      <div className="App">
        <header>
          <h1> Bloc Chat </h1>
        </header>
        <section className="roomList">
          <RoomList
            firebase={firebase}
          />
        </section>
        <section className="messageList">
          <MessageList
            firebase={firebase}
          />
        </section>
      </div>
    );
  }
}

export default App;

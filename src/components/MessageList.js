import React, { Component } from 'react';

class MessageList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      newMessage: ''
    };

    this.messagesRef = this.props.firebase.database().ref('messages');
  }

  componentDidMount() {
    this.messagesRef.on('child_added', snapshot => {
      const message = snapshot.val();
      message.key = snapshot.key;
      this.setState({ messages: this.state.messages.concat( message ) });
    });
  }

  handleChange(e) {
    this.setState({newMessage: e.target.value });
  }

  createMessage(e) {
    e.preventDefault();
    this.messagesRef.push({
      content: this.state.newMessage,
      roomId: this.props.activeRoom.key,
      username: (this.props.activeUser == null) ? "Guest":this.props.activeUser.displayName,
      sentAt: this.props.firebase.database.ServerValue.TIMESTAMP
    });
    this.setState({ newMessage: '' });
  }

  render() {
    return (
      <div>
        <ul className="messageList">
          {
            this.state.messages.filter(message =>
              this.props.activeRoom.key === message.roomId).map( (message, index) =>
              <li className='messageName' key={index}>
              {message.username}: {message.content}
              </li>
            )
          }
        </ul>
        <form className='createMessage' onSubmit={(e) => this.createMessage(e)} >
          <input type="text" value={this.state.newMessage} onChange={(e) => this.handleChange(e)} />
          <input type="submit" value="Send Message" />
        </form>
      </div>
    );
  }
}

export default MessageList;

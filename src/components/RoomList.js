import React, { Component } from 'react';

class RoomList extends Component {
  constructor(props) {
    super(props);

    this.state = {
<<<<<<< HEAD
      rooms: []
=======
      rooms: [],
      newRoomName: ''
>>>>>>> create-chat-rooms
    };

    this.roomsRef = this.props.firebase.database().ref('rooms');
  }

  componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({ rooms: this.state.rooms.concat( room )});
    });
  }

<<<<<<< HEAD
  render() {
    return (
      <ul className='roomList'>
        {
          this.state.rooms.map( (room) =>
            <li className="roomName">
              {room.name}
            </li>
          )
        }
      </ul>
=======
  handleChange(e) {
    this.setState({newRoomName: e.target.value });
  }

  createRoom(e) {
    e.preventDefault();
    this.roomsRef.push({ name: this.state.newRoomName });
    this.setState({ newRoomName: '' });
  }

  render() {
    return (
      <div>
        <ul className='roomList'>
          {
            this.state.rooms.map( (room, index) =>
              <li className='roomName' key={index}>
                {room.name}
              </li>
            )
          }
        </ul>
        <form className='createRoom' onSubmit={(e) => this.createRoom(e)} >
          <input type="text" value={this.state.newRoomName} onChange={(e) => this.handleChange(e)} />
          <input type="submit" value="Create Room" />
        </form>
      </div>
>>>>>>> create-chat-rooms
    );
  }
}

export default RoomList;

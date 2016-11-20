import React, { PropTypes, Component } from 'react';
import styles from './ChatNav.css';
import messages from './../../constants/messages';

export default class ChatNav extends Component {
  static getUser = () => {
    const val = () => Math.round(Math.random() * 10000).toString();
    const postFix = val();
    const obj = {
      email: `anon${postFix}@anon.jp`,
      username: `Anon${postFix}`,
      avatar: 'anon.png',
    };
    return obj;
  };

  static getRandomMessage = () => {
    const min = 0;
    const max = messages.length;
    const randomIndex = Math.floor(Math.random() * (max - min)) + min;
    return messages[randomIndex];
  }

  static propTypes = {
    UID: PropTypes.string,
    avatar: PropTypes.string,
    email: PropTypes.string,
    addUser: PropTypes.func,
    users: PropTypes.arrayOf(PropTypes.object),
    removeUser: PropTypes.func,
    sendMessage: PropTypes.func,
  }

  componentDidMount() {
    // materialize uses jquery. for production its better to use material-ui for modularization
    $(document).ready(() => {
      $('.button-collapse').sideNav({
        menuWidth: 240,
        edge: 'left',
        draggable: true,
      });
      $('.collapsible').collapsible();
    });
  }

  onClickAdd = (e) => {
    e.preventDefault(); // prevent page reloading
    const user = ChatNav.getUser();
    const message = {
      username: user.username,
      timestamp: new Date().toLocaleTimeString(),
      keystamp: Date.now(),
      avatar: user.avatar,
      message: 'joined the room',
    };
    this.props.addUser(user, message);
  }

  onClickDel = (e) => {
    e.preventDefault();
    const users = this.props.users;
    const kicked = users.pop();
    const message = {
      username: kicked.username,
      timestamp: new Date().toLocaleTimeString(),
      keystamp: Date.now(),
      avatar: kicked.avatar,
      message: 'was kicked',
    };
    this.props.removeUser(users, message);
  }

  onClickSend = (e) => {
    e.preventDefault();
    const users = this.props.users;
    const min = 0;
    const max = users.length;
    const randomUser = Math.floor(Math.random() * (max - min)) + min;
    const message = {
      username: users[randomUser].username,
      timestamp: new Date().toLocaleTimeString(),
      keystamp: Date.now(),
      avatar: users[randomUser].avatar,
      message: ChatNav.getRandomMessage(),
    };
    this.props.sendMessage(message);
  }

  render() {
    return (
      <div>
        <ul id="slide-out" className="side-nav">
          <li><div className="userView">
            <div className="background">
              <img src="plaid.png" alt="background" />
            </div>
            <a href="#!user"><img className="circle" src={ this.props.avatar } alt="user" /></a>
            <a href="#!name"><span className="white-text name"> { this.props.UID }</span></a>
            <a href="#!email"><span className="white-text email">{ this.props.email }</span></a>
          </div></li>
          <li><a href="#!"><i className="material-icons">view_list</i>Channels</a></li>
          <li><a href="#!">#general</a></li>
          <li><div className="divider" /></li>
          <li><a className="subheader">Debug Mode</a></li>
          <li><a className="waves-effect" href="#!" onClick={ this.onClickAdd }>Add a user</a></li>
          <li><a className="waves-effect" href="#!" onClick={ this.onClickDel }>Remove a user</a></li>
          <li><a className="waves-effect" href="#!" onClick={ this.onClickSend }>Send a random message</a></li>
        </ul>

        <a href="#button" data-activates="slide-out" className="button-collapse"><i className={`${styles.margintop} material-icons`}>menu</i></a>
      </div>
    );
  }
}

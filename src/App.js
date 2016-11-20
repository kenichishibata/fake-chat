import React, { PropTypes, Component } from 'react';
import * as ReactDOM from 'react-dom';
import ChatInput from './components/ChatInput/ChatInput';
import ChatHistory from './components/ChatHistory/ChatHistory';
import ChatHeader from './components/ChatHeader/ChatHeader';
import ChatNav from './components/ChatNav/ChatNav';
import welcome from './constants/welcome';

class App extends Component {
  static getUser = () => {
    const val = () => Math.round(Math.random() * 10000).toString();
    const postFix = val();
    const obj = {
      email: `anon${postFix}@anon.jp`,
      username: `Anon${postFix}`,
      avatar: 'anon.png',
    };
    return obj;
  } ;

  static defaultProps = {
    user0: welcome,
    user1: App.getUser(),
    user2: App.getUser(),
    user3: App.getUser(),
    user4: App.getUser(),
  }

  static propTypes = {
    user0: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    user1: PropTypes.objectOf(PropTypes.string),
    user2: PropTypes.objectOf(PropTypes.string),
    user3: PropTypes.objectOf(PropTypes.string),
    user4: PropTypes.objectOf(PropTypes.string),
  }
  // initial state
  state = {
    username: this.props.user1.username,
    avatar: this.props.user1.avatar,
    email: this.props.user1.email,
    users: [ this.props.user0, this.props.user1, this.props.user2, this.props.user3, this.props.user4 ],
    history: [
      this.props.user0,
    ],
  }

  sendMessage = (message) => {
    this.setState({
      history: this.state.history.concat(message),
    });
  }

  addUser = (newUser, message) => {
    this.setState({
      users: this.state.users.concat(newUser),
      history: this.state.history.concat(message),
    });
  }

  removeUser = (updatedUsers, message) => {
    this.setState({
      users: updatedUsers,
      history: this.state.history.concat(message),
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s2 m2 l1">
            <ChatNav
              UID={ this.state.username }
              avatar={ this.state.avatar }
              email={ this.state.email }
              addUser={ this.addUser }
              users={ this.state.users }
              removeUser={ this.removeUser }
              sendMessage={ this.sendMessage }
            />
          </div>
          <div className="col s10 m10 l11">
            <ChatHeader
              UID={ this.state.username }
              avatar={ this.state.avatar }
              users={ this.state.users }
            />
            <ChatHistory history={ this.state.history } />
          </div>
        </div>
        <ChatInput
          UID={ this.state.username }
          sendMessage={ this.sendMessage }
          avatar={ this.state.avatar }
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

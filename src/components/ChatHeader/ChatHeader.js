import React, { PropTypes, Component } from 'react';
import styles from './ChatHeader.css';
import Online from '../OnlineNav/OnlineNav';

export default class ChatHeader extends Component {
  static propTypes = {
    UID: PropTypes.string,
    avatar: PropTypes.string,
    users: PropTypes.arrayOf(PropTypes.object),
  }
  render() {
    return (
      <header className={`${styles.head} row `}>
        <Online users={ this.props.users } />
        <span className="chip left">
          <img src={ this.props.avatar } alt="user" />
          <span>{ this.props.UID } (you)</span>
        </span>
        <span className="right">
          <a href="#button" data-activates="slide-in" className="online-collapse">online now</a>
        </span>
      </header>);
  }
}


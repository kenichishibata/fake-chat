import React, { PropTypes, Component } from 'react';
import styles from './ChatInput.css';

export default class ChatInput extends Component {
  static propTypes = {
    UID: PropTypes.string,
    sendMessage: PropTypes.func,
    avatar: PropTypes.string,
  };

  onSubmit = (e) => {
    e.preventDefault(); // prevent page reloading

    const message = this.refs.updateMessage.value || null;
    if (!message) return; // check if message exists
    const sender = {
      username: this.props.UID,
      timestamp: new Date().toLocaleTimeString(),
      keystamp: Date.now(),
      avatar: this.props.avatar,
      message,
    };
    this.props.sendMessage(sender);
    this.refs.updateMessage.value = '';
    this.refs.updateMessage.focus();
  };

  render() {
    return (
      <footer className="red accent-2 page-footer">
        <form className="container" onSubmit={ this.onSubmit }>
          <div className="row">
            <div className="input-field col s7 m8 l11">
              <i className="prefix material-icons">code</i>
              <input type="text" ref="updateMessage" placeholder="message" />
            </div>
            <div className="input-field col s5 m4 l1">
              <button type="submit" className={`${styles.buttonWhite} waves-effect waves-light btn`}>
                SEND
              </button>
            </div>
          </div>
        </form>
      </footer>
    );
  }
}

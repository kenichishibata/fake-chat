import React, { Component } from 'react';
import styles from './ChatHistory.css';

export default class ChatHistory extends Component {
  static propTypes = {
    history: React.PropTypes.arrayOf(React.PropTypes.object),
  };

  render() {
    return (
      <ul className={`${styles.collection} collection`} ref="messagesList" onScroll={ this.onScroll }>
        {
          this.props.history.map((object) => {
            return (
              <li className="collection-item avatar" key={` ${object.keystamp} ${object.message} `} >
                <img src={ object.avatar } alt="user" className="circle" />
                <span className="title">{ object.username }</span>
                <br />
                <span className={`${styles.date} message-date`}>{ object.timestamp }</span>
                <br />
                <span>{ object.message }</span>
              </li>
            );
          })
        }

      </ul>
    );
  }
}

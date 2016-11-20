import React, { PropTypes, Component } from 'react';

export default class Online extends Component {
  static propTypes = {
    users: PropTypes.arrayOf(PropTypes.object),
  }
  componentDidMount() {
    // materialize uses jquery. for production its better to use material-ui for modularization
    $(document).ready(() => {
      $('.online-collapse').sideNav({
        menuWidth: 240,
        edge: 'right',
      });
      $('.collapsible').collapsible();
    });
  }

  render() {
    return (
      <ul id="slide-in" className="side-nav">
        <li><a href="#!"><i className="material-icons">perm_identity</i>Users</a></li>
        {
          this.props.users.map((user) => {
            return (
              <li className="chip" key={user.username}>
                <img src={ user.avatar } alt="user" className="circle" />
                <span className="title">{ user.username }</span>
              </li>
            );
          })
        }
      </ul>
    );
  }
}

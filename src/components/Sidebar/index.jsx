import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {

  render() {
    const links = [{
      linkName: 'Dashboard',
      path: '/app/dashboard',
    }, {
      linkName: 'User',
      path: '/app/user',
    }, {
      linkName: 'Project',
      path: '/app/User',
    }, {
      linkName: 'Settings',
      path: '/app/User'
    }]; 

    return (
      <div className="home__sidebar">
        <ul className="sidebar-menu">
        {
          links.map((link) => {
            return (<li><Link to={link.path}>{link.linkName} </Link></li>);
          })
        } 
        </ul>
      </div>     
    );
  }
}

export default Sidebar;

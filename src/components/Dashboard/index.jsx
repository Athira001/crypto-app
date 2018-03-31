import React, { Component } from 'react';
import { StackedArea } from 'britecharts';
import './index.css';

class Dashboard extends Component {

  render() {
  

    return (
      <div className="dashboard">
        <StackedArea
          data={[46,34,199,500]}
          width={600}
          height={400}
        />
      </div>     
    );
  }
}

export default Dashboard;

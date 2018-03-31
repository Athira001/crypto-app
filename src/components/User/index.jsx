import React, { Component } from 'react';
import './index.css';

class User extends Component {
  constructor() {
    super();

    this.state = {
      links: [{
      name: 'Athira',
      email: 'athira1@404minds.com',
      country: 'India',
      policy: 'No',
      selected: false,
    },{
      name: 'Athira',
      email: 'athira2@404minds.com',
      country: 'India',
      policy: 'No',
      selected: false,
    },{
      name: 'Athira',
      email: 'athira3@404minds.com',
      country: 'India',
      policy: 'No',
      selected: false,
    }, {
      name: 'Athira',
      email: 'athira4@404minds.com',
      country: 'India',
      policy: 'No',
      selected: false,
    }]
    };

    this.renderRow = this.renderRow.bind(this);
  }

  renderRow(data, index) {
    const onCheckChange = () => {
      const newLinks = this.state.links.concat([]);

      newLinks[index].selected = !data.selected;

      this.setState({
        links: newLinks,
      }, () => {
        console.log(this.state.links);
      });
    };

    return (
      <div className="user__container__data__row">
        <div className="user__container__data__check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" checked={data.selected} onChange={onCheckChange} />
        </div>
        <div className="user__container__data__item">
          {data.name}
        </div>
        <div className="user__container__data__item">
          {data.email}
        </div>
        <div className="user__container__data__item">
          {data.country}
        </div>
        <div className="user__container__data__item">
          {data.policy}
        </div>
      </div>
      );
  }

  render() {

    return (
      <div className="user">
        <div className="user__container">
          <div className="user__container__filter">
          </div>
          <div className="user__container__header">
            <div className="user__container__header__check">
            </div>
            <div className="user__container__header__item">
              Name
            </div>
            <div className="user__container__header__item">
              Email
            </div>
            <div className="user__container__header__item">
              Country
            </div>
            <div className="user__container__header__item">
              Policy
            </div>
          </div>
          <div className="user__container__data">
            {
              this.state.links.map(this.renderRow)
            }
          </div>
        </div>       
      </div>     
    );
  }
}

export default User;

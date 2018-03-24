import React, { Component } from 'react';
import Logo from './image/logo.svg';
import './index.css';

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      firstName: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    console.log('data', this.state);
    this.props.signup(this.state);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div className="App-header">
        <div className="App-container">
         <div className="Logo-section">
          <a href="">
            <img src={Logo} alt="logo" />
          </a>
         </div>
         <h1>Join Topcoder</h1>
         <form action="" method="post" onSubmit={this.onSubmit}>
          <div className="Name-section">
           <input className="Mrgr" type="text" placeholder="FIRST NAME" name="firstName" onChange={this.handleChange} value={this.state.firstName} />
           <input type="text" placeholder="LAST NAME" name="lastName" onChange={this.handleChange} value={this.state.lastName} />
          </div>
          <div className="Detail-section">
           <input type="text" placeholder="COUNTRY" name="country" onChange={this.handleChange} value={this.state.country} />
           <div className="Custom-padding">
            <input type="text" placeholder="USER NAME" name="username" onChange={this.handleChange} value={this.state.username} />
            <input type="email" placeholder="ENTER YOUR EMAIL" name="email" onChange={this.handleChange} value={this.state.email} />
            <div className="Inpit-btn">
             <input type="password" placeholder="CREATE PASSWORD" name="password" onChange={this.handleChange} value={this.state.password} />
             <button type="submit" className="Btn-blue">Hide</button>
            </div>
            <p className="font-small">By clicking "Join" you agree to Topcoder's <a href="">Terms</a> and <a href="">Privacy Policy</a></p>
            <p className="align-center"><button type="submit" className="btn btn-join">join</button></p>
           </div>
          </div>
          
         </form>

        </div>
        <div className="join-container">
        <p className="font-small">Have an account?<a href="">LOGIN</a></p>
        </div>


      </div>
     
    );
  }
}

export default SignUp;

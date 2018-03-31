import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './image/logo.svg';
import './index.css';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.login(this.state);
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
          <div className="Detail-section">
           <div className="Custom-padding">
            <input type="email" placeholder="ENTER YOUR EMAIL" name="email" onChange={this.handleChange} value={this.state.email} />
            <div className="Inpit-btn">
             <input type="password" placeholder="CREATE PASSWORD" name="password" onChange={this.handleChange} value={this.state.password} />
             <button type="submit" className="Btn-blue">Hide</button>
            </div>
            <p className="font-small"> <a href="">Forgot your password?</a> </p>
            <p className="align-center">
              {/*<button type="submit" className="btn btn-join">Login</button>*/}
              <Link to='/app'>Login </Link>
            </p>
           </div>
          </div>
          
         </form>

        </div>
        <div className="join-container">
        <p className="font-small">Not a member yet ?<a href="">Join Now</a></p>
        </div>


      </div>
     
    );
  }
}

export default Login;

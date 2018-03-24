import axios from 'axios';

// SignUp
export function signup(user) {
  axios.post('http://192.168.0.13:4001/signUp', user)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

// Login
export function login(user) {
  axios.post('http://192.168.0.13:4001/login', user)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}
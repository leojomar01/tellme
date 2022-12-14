import React from 'react';
import PropTypes from 'prop-types';
import './AppLoginContent.css';
import axios from 'axios';

class AppLoginContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //hardcoded for now
      username: 'rics',
      password: '123',
      isLoggin: false,
      error: '',
      loading: false,
    };
  }

//LOGIN FUNCTION
  handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    // const data = {
    //   username: username,
    //   password: password
    // }
    // this.props.login(data);

    //set loadng to true
    this.setState({
      loading: true
    });
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 2000);

    let data = {
      email:username,
      password:password
    }
    console.log(data);
    axios.post('http://localhost:8000/login.php',data)
      .then(res=>{
        console.log(res);
      })
      .catch(err=>{
        console.log(err);
      })
   
    //login verification
    if( username == this.state.username && password == this.state.password ){
      setTimeout(() => {
        this.setState({
          isLoggin: true
        });
        //set username to localstorage for now
        localStorage.setItem('username', username);
        window.location.href = '/inbox';
      }, 2000);
    }else {
      //alert error when invalid login
      setTimeout(() => {
        this.setState({
          error: 'Invalid username or password'
        });
      }, 2000);
    }
  }

  // getMessage(){
  //   // e.preventDefault()
  //   axios.get('http://localhost:8000/login.php')
  //   .then(res=>{
  //     console.log(res);
  //   })
  //   .catch(err=>{
  //     console.log(err);
  //   })
  // }

  resetAlert = () => {
    this.setState({
      error: ''
    });
  }

  // getPHP(){
  //   fetch(`http://localhost:8000/login.php`,{
  //     method:'POST',
  //     headers:{
  //       Accept:'application/json',
  //       'Content-Type':'application/json'
  //     },
  //     body:JSON.stringify
  //   }).then(res=> res.json())
  //   .then(response=>{
  //     console.log('response');
  //     console.log(response);
  //   })
  // }

  render(){
    return (
      <div className="AppLoginContent" data-testid="AppLoginContent">
        <div className='login-form-container'>
          {/* <form action='http://localhost:8000/login.php' method='POST'> */}
          <form onSubmit={this.handleLogin}>
            <div className="form-group text-uppercase">
              <h1 className='text-danger'>Login</h1>
            </div>
            <hr className='text-white'></hr>
            <center className='mt-4'>
              {
                this.state.error ? 
                <div class="alert alert-danger alert-dismissible fade show w-100 mx-0" role="alert">
                  <small>{this.state.error}</small>
                  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={this.resetAlert}></button>
                </div>
                : null
              }
              <div className="form-group mb-3 login-inputs">
                <input type="text" className="form-control" id="username" placeholder="Username" name="username" required />
              </div>
              <div className="form-group mb-3 login-inputs">
                <input type="password" className="form-control" id="pwd" placeholder="Password" name="password" required />
              </div>
              <div className="form-group w-100">
                <button className='btn btn-danger btn-lg w-100 rounded-5' name ="login">
                  {
                    this.state.loading == true ? <div className='spinner-border spinner-border-sm' role='status'></div> : 'Login'
                  }
                </button>
              </div>
              <div className="mb-3 text-white d-lg-flex justify-content-between w-100">
                <div className='m-1'>
                  <input type="checkbox" className="form-check-input me-2" id="checkbox" placeholder="Confirm password" />
                  <label htmlFor='checkbox'>Remember me</label>
                </div>
                <div className='m-1'>
                  <small><a href='/password_reset' className='text-white text-decoration-none'>Forgot password?</a></small>
                </div>
              </div>
              <small className='text-white'>Don't have an account? <a href='/register' className='text-danger fw-bold text-decoration-none'>Get started</a></small>
            </center>
          </form>
        </div>
      </div>
    );
  }
  
}

AppLoginContent.propTypes = {};

AppLoginContent.defaultProps = {};

export default AppLoginContent;

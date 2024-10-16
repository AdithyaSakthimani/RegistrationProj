import React, { Component } from 'react'
import HeaderFunc from './Heading'
import './LoginStyle.css' 
class LoginPage extends Component {
    constructor(){
        super()
        this.state={
            Message:'',
            Username:'',
            Password:''
        }
    }
    UsernameChanger=(event)=>{
        this.setState({
            Username:event.target.value
        })
    }
    PasswordChanger=(event)=>{
        this.setState({
            Password:event.target.value
        })
    }
    CheckerFunc=()=>{
        if(this.state.Password === this.props.PassW &&
            this.state.Username === this.props.UserN
         ){
            this.setState({
                Message:'The Entered Username Password are Correct '
            })
        }
        else{
            this.setState({
                Message:'The Entered Username Password are Incorrect '
            })
        }
    }
  render() {
    return (
      <div>
        <HeaderFunc title="LOGIN"/>
        <div className = "login-box">
        <input 
        className='user-box'
        type ="text" 
        value = {this.state.Username}
        onChange={this.UsernameChanger
        }placeholder='Enter your Username'/>
        <input type ="password" 
        className='pass-box'
        value = {this.state.Password}
        onChange = {this.PasswordChanger
        } placeholder='Enter your Password '/>
        </div>
        <div className ="button-area">
        <button onClick={this.CheckerFunc}>
            LOGIN 
        </button>
        </div>
        <div className="message">
        {this.state.Message}
        </div>
    `</div>  
    )
  }
}

export default LoginPage
import React, { Component } from 'react';
import "./Login.module.css"
import GitHub from 'github-api';


const loginBox = 
{
    position:"relative",
    height :"50vh",
    width:"400px",
    backgroundColor:"white",
    margin:"auto",
    borderStyle: "solid",
    borderWidth:"1px",
    borderColor: "#dedcdc",
    marginTop:"10vh"
}

const submitButton = 
{
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "8px 20px",
    margin: "8px 0px",
    border: "none",
    cursor: "pointer",
    width: "80%",
    paddingTop: "40px",
    marginLeft:"10%",
}


const submitText = 
{
    margin: 0,
    position: 'absolute',
    top: '72%',
    left: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '18px',
    fontWeight: 'bold',
    fontAlign: 'center',
  }

  const imageStyle = 
  {
      width:"auto",
      height:"auto",
      position: "relative",
      marginLeft: "10%",
      marginRight: "90%"
      
  }

  const inputStyle = 
  {
      textAlign: "left",
      fontSize:"20px",
      color: "black",
      backgroundColor: "#f3f3f3",
      width:"80%",
      marginLeft: "10%",
      marginRight:"90%",
      marginBottom:"20%",
      paddingBottom: "20px",
      paddingTop:"20x",
      height:"40px",
      border: "0"
  }

  


class Login extends Component {

    submitClick(props)
    {
       let name = document.getElementById("usernameArea").value
       let password = document.getElementById("passwordArea").value
       document.getElementById("passwordArea").value = ""
       document.getElementById("usernameArea").value = ""
       this.props.retrieveInfo(name, password)
    }

    constructor(props)
    {
        super(props)
        this.submitClick = this.submitClick.bind(this)
    }

  render() {

    return (
      <div style = {this.props.display===true?{display:"initial"}:{display:"none"}}>
        <div style = {loginBox}>
                <img  style = {imageStyle} alt ="Github Logo" src = 'githubLogo.png' />
            <div style = {{height:"50px"}}>
                <input id = "usernameArea" autoComplete ="on" style = {inputStyle} placeholder = "Username" ></input>
            </div>
            <div style = {{height:"50px"}}>
                <input id = "passwordArea"autoComplete = "on"   style = {inputStyle} placeholder = "Password" type = "password"></input>
            </div>

                <div onClick = {this.submitClick} style = {submitButton}>
                    <div style = {submitText}> Submit </div>
                </div>
        </div>
        </div>

    );
  }
}

export default Login;
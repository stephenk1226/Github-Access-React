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
      
  }

  const inputStyle = 
  {
      textAlign: "left",
      fontSize:"20px",
      color: "black",
      backgroundColor: "#f3f3f3",
      width:"80%",
      marginLeft: "10%",
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
 
        
        var github = new GitHub({

        username: 'username',
        password: 'password'

         });

        var myGithub = github.getUser(); 

        myGithub.listNotifications(function(err, notifications)
         {
        console.log(notifications)


        myGithub.getProfile(function(err, details) 
        {
        console.log(details)
        });


        myGithub.listRepos(function(err, repos)
        {
        console.log(repos)
        });

        var test = github.getUser(name);
        test.listRepos(function(err, repos)
         {

        var languages = getLangStats(repos)
        console.log(languages)
  
        });

        
        var getLangStats = function getLangStats(repos) {
        var mapper = function(ent){
        console.log(ent)
        var currentLangs = JSON.parse(httpGet(ent.languages_url));
        console.log((currentLangs))
        var index = 0
          for( let i in currentLangs)
            {
              console.log(Object.keys(currentLangs)[index]+" : "+currentLangs[i])
              index++;
            }
        return ent.language},
      reducer = function(stats, lang) {stats[lang] = (stats[lang] || 0) + 1; return stats},
      langStats = repos.map(mapper).reduce(reducer, {});
      delete langStats['null'];
      return Object.keys(langStats).sort(function(a,b){return langStats[b] - langStats[a]});
      };
      


      function httpGet(theUrl)
      {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", theUrl, false); 
        xmlHttp.send( null );
       return xmlHttp.responseText;
      }


  });


    }

    constructor(props)
    {
        super(props)
        this.submitClick = this.submitClick.bind(this)
    }

  render() {

    return (
        <div style = {loginBox}>
                <img  style = {imageStyle} alt ="Github Logo" src = 'githubLogo.png' />
            <div style = {{height:"50px"}}>
                <input autoComplete ="on" style = {inputStyle} placeholder = "Username" ></input>
            </div>
            <div style = {{height:"50px"}}>
                <input autoComplete = "on"   style = {inputStyle} placeholder = "Password" type = "password"></input>
            </div>

                <div onClick = {this.submitClick} style = {submitButton}>
                    <div style = {submitText}> Submit </div>
                </div>
        </div>
    );
  }
}

export default Login;
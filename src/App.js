import React, {Component, useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import GithubScreen from './GithubScreen';
import * as d3 from "d3";
import PieClass from "./Piechart";
import PieHooks from "./PieHooks";
import ReactDOM from "react-dom";
import GitHub from 'github-api';



class App extends Component {


getLoginDetails(userName, password)
 {
    this.setState({
        userName:userName,
        password:password,
        displayLogin: false,
        displayGithubScreen: true
    })

    const that = this
    var github = new GitHub({

        username: userName,
        password: password

         });

    var myGithub = github.getUser(userName);

    myGithub.getProfile(function(err, details) 
    {
          that.setState({
              userInfo:details
          })
        })

    myGithub.listRepos(function(err, repos)
    {
        that.setState({
            repoInfo:repos
        })
    })
 }


  constructor(props)
  {
    super(props);
    this.state =
    {
      displayLogin: true,
      displayGithubScreen: false,
      userInfo:'',
      repoInfo:'',
    };
 
  this.getLoginDetails = this.getLoginDetails.bind(this);
 }


  render() {


    return (
      <div className = "App" >
        <GithubScreen display = {this.state.displayGithubScreen}  info = {this.state.userInfo} repo = {this.state.repoInfo}/>
        <Login display = {this.state.displayLogin} retrieveInfo = {this.getLoginDetails}/>
        
      </div>
    ); 
  }
}






export default App;
import React, {Component, useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import GithubScreen from './GithubScreen';
import * as d3 from "d3";
import PieClass from "./Piechart";
import PieHooks from "./PieHooks";
import ReactDOM from "react-dom";




class App extends Component {


getLoginDetails(userName, password)
 {
    this.setState({
        userName:userName,
        password:password,
        displayLogin: false,
        displayGithubScreen: true
    })
 }


  constructor(props)
  {
    super(props);
    this.state =
    {
      displayLogin: true,
      displayGithubScreen: false,
    };
 
  this.getLoginDetails = this.getLoginDetails.bind(this);
 }


  render() {

    const isLoggedIn = this.state.isLoggedIn;

    return (
      <div className = "App" >
        <GithubScreen display = {this.state.displayGithubScreen} userName = {this.state.userName} password = {this.state.password}/>
        <Login display = {this.state.displayLogin} retrieveInfo = {this.getLoginDetails}/>
        
      </div>
    ); 
  }
}






export default App;
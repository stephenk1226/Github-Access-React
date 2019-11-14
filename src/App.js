import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import GithubScreen from './GithubScreen';


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


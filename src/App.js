import React, {Component, useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import GithubScreen from './GithubScreen';
import * as d3 from "d3";
import GitHub from 'github-api';


var array = [];
var locArray  = [];
var returnArray = [];
var previous = '';

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
          console.log(details)
          that.setState({
              userInfo:details
          })
        })

    myGithub.listRepos(function(err, repos)
    {

      var languages =  getLangStats(repos)
        that.setState
        ({
           repoInfo:repos,
           Languages:languages
        })
    })
          
      var getLangStats = function getLangStats(repos)
        {
        var mapper = function(ent)
        {  
        var currentLangs = JSON.parse(httpGet(ent.languages_url));
        var index = 0
          for( let i in currentLangs)
          {
            array.push(Object.keys(currentLangs)[index])
            locArray.push(currentLangs[i]) 
            index++
          }
      return ent.language},
      reducer = function(stats, lang) {stats[lang] = (stats[lang] || 0) + 1; return stats},
      langStats = repos.map(mapper).reduce(reducer, {});
      delete langStats['null'];
        for(var j =0; j < array.length; j++ )
        {
          returnArray.push([array[j], locArray[j]])
        } 
      return returnArray
      };
      

      function httpGet(theUrl)
      {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", theUrl, false); 
        xmlHttp.send( null );
       return xmlHttp.responseText;
      }

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
      Languages:'',     
    };
 
  this.getLoginDetails = this.getLoginDetails.bind(this);
 }
 

  render() {


    return (
      <div className = "App" >
        <GithubScreen display = {this.state.displayGithubScreen}  info = {this.state.userInfo} repo = {this.state.repoInfo} userName = {this.state.userName} languageInfo = {this.state.Languages}/>
        <Login display = {this.state.displayLogin} retrieveInfo = {this.getLoginDetails}/>
      </div>
    ); 
  }
}






export default App;
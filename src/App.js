import React, {Component} from 'react';
import GitHub from 'github-api';
import './App.css';


var gh = new GitHub({
    token: 'af7ec3ee89651020c6cbbd30bb395f60c1f8d395'
});


var me = gh.getUser(); 

me.listNotifications(function(err, notifications) {
	console.log(notifications)

});

me.getProfile(function(err, details) {
	console.log(details)
});


me.listRepos(function(err, repos)
{
	console.log(repos)
});

var test = gh.getUser('stephenk1226');
test.listRepos(function(err, repos) {

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
    xmlHttp.open( "GET", theUrl, false); // false for synchronous request
    //xmlHttp.responseType = 'json'
    xmlHttp.send( null );
    return xmlHttp.responseText;
}



export default class App extends Component {
  render() {
  	
    return (
    	
      	<div> I am the test Component</div>
    );
  }
}


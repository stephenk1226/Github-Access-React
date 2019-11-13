import React, { Component } from 'react';
import GitHub from 'github-api';

const navbar ={

	position:"relative",
    height :"10vh",
    width:"100vw",
    backgroundColor:"white",
    
}
const title ={
	marginLeft:"5vh",
	paddingTop: "1vh",
	color: "black",
}

const informationArea = {
	position: "relative",
	height: "75vh",
	width:  "80vw",
	backgroundColor: "white",
	marginLeft: "10vw",
	marginTop: "10vh",
	borderStyle: "solid",
    borderWidth:"1px",
    borderColor: "#dedcdc",
}

/*
const signoutButton = 
{
	position: "relative",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    cursor: "pointer",
    width: "10%",
 	height: "40%",
    marginLeft:"80%",
    marginTop:"0",
    
}
*/

function runGithubQuery()
{

		var github = new GitHub({

        username: this.props.usernName,
        password: this.props.password

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

        var test = github.getUser('stephenk1226');
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



class GithubScreen extends Component{

	

	render(){

		return(

				<div style ={navbar}> 
					<h1 style= {title}> Github Access </h1>
					
						<div style = {informationArea}>

						</div>
				</div>


			);
	}

}

export default GithubScreen;
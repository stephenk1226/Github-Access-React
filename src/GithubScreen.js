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

const profile = {

	position: "absolute",
	marginTop: "1vh",
	marginLeft: "2vw"
}

const followers = {

	position: "absolute",
	marginTop: "6vh",
	marginLeft: "2vw"
}

const following = {

	position: "absolute",
	marginTop: "11vh",
	marginLeft: "2vw"
}

const repos = {
	position: "absolute",
	marginTop: "16vh",
	marginLeft: "2vw"
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





class GithubScreen extends Component{

	

getGithubInfo()
{
		
		let numberOfRepos = 0 

		var github = new GitHub({

        username: this.props.userName,
        password: this.props.password

         });
		
	
        var myGithub = github.getUser(this.props.userName);
 
        myGithub.listNotifications(function(err, notifications)
         {
        console.log(notifications)


        myGithub.getProfile(function(err, details) 
        {

        	var following = details.following
        	var followers = details.followers
        	var profile = details.login
        	var privateRepos = details.total_private_repos
        	console.log(details)
       		console.log(followers)
       		console.log(following)
       		console.log(profile)
       		console.log(privateRepos)

       /*	this.setState({
       		Followers:followers,
       		Following:following,
       		Profile:profile,
       		PrivateRepos:privateRepos
       	})*/
       		

        });


        
        myGithub.listRepos(function(err, repos){

        	numberOfRepos = repos.length
        	console.log(numberOfRepos)
        	
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


	constructor(props)
		{
			super(props)
			this.state =
			{
				Followers: "",
				Following: "",
				Profile: "",
				PrivateRepos:"",
			};
			
		}

	render(){

		


		if(this.props.userName !== undefined)
		{
			this.getGithubInfo()
		}

		/*
			this.setState({
				Followers:this.state.Followers,
				Following:this.state.Following,
				Profile:this.state.Profile,
				PrivateRepos:this.state.PrivateRepos
			})
		*/

			
		
		
		
		return(

			 <div style = {this.props.display===true?{display:"initial"}:{display:"none"}}>
				<div style ={navbar}> 
					<h1 style= {title}> Github Access </h1>
						<div style = {informationArea}>
							<h5 style = {profile} > Profile: {this.props.userName}  </h5>
							<h5 style = {followers} > Followers: {this.state.Followers} </h5>
							<h5 style = {following} > Following: {this.state.Following} </h5>
							<h5 style = {repos}> Number of Repos: </h5>
						</div>
				</div>
			</div>


			);
	}

}

export default GithubScreen;
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

const Privaterepos = {
	position: "absolute",
	marginTop: "21vh",
	marginLeft: "2vw"
}

const languages = {
	position: "absolute",
	marginTop: "26vh",
	marginLeft: "2vw"
}

const imgStye = {
  borderRadius: "50%",
  width: "250px",
  height: "250px"
};

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
		

		var github = new GitHub({

        username: this.props.userName,
        password: this.props.password

         });

		const that = this;
        let numberOfRepos = 0;
        var myGithub = github.getUser(this.props.userName);
 

     
        myGithub.getProfile(function(err, details) 
        {
        	console.log(details)	
       		that.setState({
       			Followers:details.followers,
       			Following:details.following,
       			PrivateRepos:details.total_private_repos,
       			Profile:details.login,
       			ProfileImage:details.avatar_url
       		})
       		

        })

        
        
        myGithub.listRepos(function(err, repos){

        	numberOfRepos = repos.length
        	console.log(numberOfRepos)
        	var languages = getLangStats(repos)
       		that.setState(
        	{
       			numberOfRepos:numberOfRepos,
       			Languages:languages
       		})
        	
        })
        

        
        var getLangStats = function getLangStats(repos)
        {
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



  

}      	


	constructor()
		{
			super()
			this.state =
			{
				Followers: "Not assigned",
				Following: 'Not assigned',
				Profile: 'Not assigned',
				PrivateRepos: 'Not assigned',
				numberOfRepos: 'Not assigned',
				Languages: "Not assigned",
				ProfileImage: "Not assigned"
			};

			this.getGithubInfo = this.getGithubInfo.bind(this);
		}

	render(){

		


		if(this.props.userName !== undefined && this.props.password !== undefined)
		{
			this.getGithubInfo()
		}
		
		return(

			 <div style = {this.props.display===true?{display:"initial"}:{display:"none"}}>
				<div style ={navbar}> 
					<h1 style= {title}> Github Access </h1>
						<div style = {informationArea}>
							<h5 style = {profile} > Profile: {this.state.Profile}  </h5>
							<h5 style = {followers} > Followers: {this.state.Followers} </h5>
							<h5 style = {following} > Following: {this.state.Following} </h5>
							<h5 style = {repos}> Number of Public Repos: {this.state.numberOfRepos}</h5>
							<h5 style = {Privaterepos}> Number of Private Repos: {this.state.PrivateRepos}</h5>
							<h5 style = {languages}> Languages Used: {this.state.Languages}</h5>
							<img src = {this.state.ProfileImage} alt = "Profile Picture" style ={imgStye}/>
						</div>
				</div>
			</div>


			);
	}

}

export default GithubScreen;
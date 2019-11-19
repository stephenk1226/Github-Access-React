import React, { Component } from 'react';
import GitHub from 'github-api';


const title ={
	marginLeft:"5vh",
	paddingTop: "1vh",
	color: "black",
}

const informationArea = {
	position: "relative",
	height: "90vh",
	width:  "80vw",
	backgroundColor: "white",
	marginLeft: "10vw",
	marginTop: "5vh",
	borderStyle: "solid",
    borderWidth:"1px",
    borderColor: "#dedcdc",
}

const profile = {

	position: "absolute",
	marginTop: "-90px",
	marginLeft: "15vw",
	fontSize: "28px",
	fontWeight: "bold",
	fontAlign: "center"

}

const followers = {

	position: "absolute",
	marginTop: "-90px",
	marginLeft: "30vw"
}

const followersResult = {
	position: "absolute",
	marginTop: "-65px",
	marginLeft: "32vw"
}

const following = {

	position: "absolute",
	marginTop: "-90px",
	marginLeft: "40vw"
}

const followingResult = {

	position: "absolute",
	marginTop: "-65px",
	marginLeft: "42vw"
}


const repos = {
	position: "absolute",
	marginTop: "-90px",
	marginLeft: "50vw"
}

const reposResult = {
	position: "absolute",
	marginTop: "-65px",
	marginLeft: "52vw"
}


const Privaterepos = {
	position: "absolute",
	marginTop: "-90px",
	marginLeft: "60vw"
}

const PrivatereposResult = {
	position: "absolute",
	marginTop: "-65px",
	marginLeft: "62vw"
}

const languages = {
	position: "absolute",
	marginTop: "-90px",
	marginLeft: "70vw"
}

const languagesResult = {
	position: "absolute",
	marginTop: "-65px",
	marginLeft: "72vw"
}


const imgStye = {
  position: "relative",
  borderRadius: "50%",
  width: "150px",
  height: "150px",
  marginTop: "3vh",
  marginRight: "95vw",
  marginLeft: "2vw"
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
				Languages: "",
				ProfileImage: "Not assigned",
			};
			
		}

	render(){

		return(

			console.log(this.props.repo),

			 <div style = {this.props.display===true?{display:"initial"}:{display:"none"}}>
						<div style = {informationArea}>
							<img  style ={imgStye} src = {this.props.info.avatar_url} alt = "Profile Picture" />
							<div style = {profile} >  {this.props.info.login}  </div>
							<h5 style = {followers} > Followers:  </h5>
							<h5 style = {followersResult} > {this.props.info.followers} </h5>
							<h5 style = {following} > Following:  </h5>
							<h5 style = {followingResult}> {this.props.info.following} </h5>
							<h5 style = {repos}> Public Repos: </h5>
							<h5 style ={reposResult}> {this.props.info.public_repos} </h5>
							<h5 style = {Privaterepos}> Private Repos: </h5>
							<h5 style = {PrivatereposResult}> {this.props.info.total_private_repos} </h5>
							<h5 style = {languages}> Languages: </h5>
							<h5 style = {languagesResult}> {this.state.Languages} </h5>
						</div>
			</div>


			);
	}

}

export default GithubScreen;
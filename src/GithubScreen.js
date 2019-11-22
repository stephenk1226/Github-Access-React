import React, { Component } from 'react';
import GitHub from 'github-api';
//import {Pie} from './Pie';
import Piechart from './Piechart';


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



var lang = '';
var array = []

class GithubScreen extends Component{

getChartData()
{
    
  let data = []
  for(let language in this.props.languageInfo)
  {
    let newItem = 
    {
      "id": language ,
      "label": this.props.languageInfo ,
      "value": 50,
  
    }
    data.unshift(newItem)
  }
 
  return data
}


getMostUsedLanguage()
{
	var max = 0
	var  mostUsed = ''
	for(var i =0; i < this.props.repo.length; i++)
	{	
		lang = this.props.repos[i].languages;
		if(lang >0)
		{
			mostUsed = lang
		}	
	}	

	return mostUsed
}	

	
	constructor(props)
		{
			super(props)
			{
				this.state ={
					langs:
					{
						'Not assignned': 100
					},
				}
			}
			

	}



	render(){		

		if(this.props.userName !== undefined)
		{
			this.getChartData()
		}
		console.log(this.props.languageInfo)
		

		return(
			 <div style = {this.props.display===true?{display:"initial"}:{display:"none"}}>
						<div style = {informationArea}>
							<img  style ={imgStye} src = {this.props.info.avatar_url} alt = "Profile Picture" />
							<div style = {profile} >  {this.props.info.login}  </div>
							<h7> {this.props.info.bio} </h7>
							<h5 style = {followers} > Followers:  </h5>
							<h5 style = {followersResult} > {this.props.info.followers} </h5>
							<h5 style = {following} > Following:  </h5>
							<h5 style = {followingResult}> {this.props.info.following} </h5>
							<h5 style = {repos}> Public Repos: </h5>
							<h5 style ={reposResult}> {this.props.info.public_repos} </h5>
							<h5 style = {Privaterepos}> Private Repos: </h5>
							<h5 style = {PrivatereposResult}> {this.props.info.total_private_repos} </h5>
							<h5 style = {languages}> Languages: </h5>
							<h5 style = {languagesResult}> {this.props.languageInfo}</h5>
							<Piechart chartData = {this.getChartData()} />
					
						</div>
			</div>


			);
	}

}

export default GithubScreen;
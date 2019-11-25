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

const piechartContainer = 
{
	  
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
	marginTop: "-45px",
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
  for( var i =0; i < this.props.languageInfo.length;  i++)
  {
		for(let j in this.props.languageInfo)
		{
    		let newItem = 
    		{
      		"id": this.props.languageInfo[i][0] ,
      		"label": this.props.languageInfo[i][0],
			"value": this.props.languageInfo[i][j]/100
			//"value": 50  
			}
			data.unshift(newItem)
		}	
  }
 
  return data
}


getMostUsedLanguage()
{
	var max = 0
	var  mostUsed = ''
	for(let i in this.props.languageInfo)
	{
		for(let j in this.props.languageInfo)
		{
			if(this.props.languageInfo[i][j] > max )
			{
				max = this.props.languageInfo[i][j]
				mostUsed = this.props.languageInfo[i][0]
			}
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

		/*if(this.props.userName !== undefined)
		{
			this.getChartData()
		}*/
		console.log(this.props.languageInfo)
	

		return(
			 <div style = {this.props.display===true?{display:"initial"}:{display:"none"}}>
						<div style = {informationArea}>
							<img  style ={imgStye} src = {this.props.info.avatar_url} alt = "Profile Picture" />
							<div style = {profile} >  {this.props.info.login}  </div>
							{/*<h7> {this.props.info.bio} </h7> */}
							<h5 style = {followers} > Followers:  </h5>
							<h5 style = {followersResult} > {this.props.info.followers} </h5>
							<h5 style = {following} > Following:  </h5>
							<h5 style = {followingResult}> {this.props.info.following} </h5>
							<h5 style = {repos}> Public Repos: </h5>
							<h5 style ={reposResult}> {this.props.info.public_repos} </h5>
							<h5 style = {Privaterepos}> Private Repos: </h5>
							<h5 style = {PrivatereposResult}> {this.props.info.total_private_repos} </h5>
							<h5 style = {languages}> Most used Language: </h5>
							<h5 style = {languagesResult}> {this.getMostUsedLanguage()}</h5>
							<div style={{height:300, marginLeft: 550, }}>
									<h5 style = {{ marginTop: 50}}> Language Stats</h5>
									<Piechart style = {piechartContainer} chartData = {this.getChartData()} />
							</div>		
						</div>
			</div>
																					

			);
	}

}

export default GithubScreen;
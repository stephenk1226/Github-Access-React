import React, { Component } from 'react';
import Piechart from './Piechart';


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
	marginTop: "-110px",
	marginLeft: "30vw"
}

const followersResult = {
	position: "absolute",
	marginTop: "-85px",
	marginLeft: "32vw",
	fontWeight: "bold",
}

const following = {

	position: "absolute",
	marginTop: "-110px",
	marginLeft: "40vw"
}

const followingResult = {

	position: "absolute",
	marginTop: "-85px",
	marginLeft: "42vw",
	fontWeight: "bold",
}


const repos = {
	position: "absolute",
	marginTop: "-110px",
	marginLeft: "50vw"
}

const reposResult = {
	position: "absolute",
	marginTop: "-85px",
	marginLeft: "52vw",
	fontWeight: "bold",
}


const Privaterepos = {
	position: "absolute",
	marginTop: "-110px",
	marginLeft: "60vw"
}

const PrivatereposResult = {
	position: "absolute",
	marginTop: "-85px",
	marginLeft: "62vw",
	fontWeight: "bold",
}

const languages = {
	position: "absolute",
	marginTop: "-110px",
	marginLeft: "69vw"
}

const languagesResult = {
	position: "absolute",
	marginTop: "-55px",
	marginLeft: "72.5vw",
	fontWeight: "bold",
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

getCommitFrequency()
{
	var URL = "http://ghchart.rshah.org/00CCBC/"
	var username = this.props.userName
	let result = URL + username
	return result;
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

	render(){		
		return(
			 <div style = {this.props.display===true?{display:"initial"}:{display:"none"}}>
						<div style = {informationArea}>
							<img  style ={imgStye} src = {this.props.info.avatar_url} alt = "Profile Picture" />
							<div style = {profile} >  {this.props.info.login} </div>
							<div style ={{marginLeft:-450, marginTop: -30}}>
								<h6> {this.props.info.bio} </h6> 
							</div>	
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
							<div style={{height:300, marginLeft: 650, }}>
									<h5 style = {{ marginTop: 50}}> Language Stats</h5>
									<Piechart  chartData = {this.getChartData()} />
							</div>
							<div style = {{marginRight:500 }}>
								<h5 style ={{ marginTop: -180, paddingBottom: 20}}> Commit Frequency </h5>
								<img src = {this.getCommitFrequency()} alt="Commit Chart" />
							</div>		
						</div>
			</div>
																					

			);
	}

}

export default GithubScreen;
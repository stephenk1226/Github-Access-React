import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
//import Loading from './Loading';
import GithubScreen from './GithubScreen';



function Display(props)
{

  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn === true)
  {
    return <GithubScreen />;
  }

  return <Login/>;
}


class App extends Component {




  render() {
    return (

      <Display isLoggedIn = {false}/>
    ); 
  }
}




export default App;


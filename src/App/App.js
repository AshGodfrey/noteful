import React from 'react';
import dummyStore from '../dummy-store'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import Main from '../Main/Main'
import { Route } from 'react-router-dom'
import Home from '../Home/Home'


class App extends React.Component{ 
	state = {
		folders: [],
		notes: []
	}	


	componentDidMount(){
		this.setState(dummyStore)
	}

	render() { 
	return (
		<div> 
			<Header />
			<Route exact path="/" component={Home} folders={this.state.folders} notes={this.state.notes} />
		
		</div>)
 }
}

export default App;
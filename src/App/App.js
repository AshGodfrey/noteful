import React from 'react';
import dummyStore from '../dummy-store'
import Header from '../Header/Header'
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
			<Route exact path="/" render={(props) => <Home {...props} folders={this.state.folders} notes={this.state.notes}/> } />
		</div>)
 }
}

export default App;
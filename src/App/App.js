import React from 'react';
import dummyStore from '../dummy-store'
import Header from '../Header/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
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
		<Router>
			<div> 
				<Header />
				<Route exact path="/" render={(props) => <Home {...props} folders={this.state.folders} notes={this.state.notes}/> } />
				<Route exact path="/folder/:activeFolderId" render={(props) => <Home {...props} folders={this.state.folders} notes={this.state.notes} /> } />
			</div>
		</Router>)
 }
}

export default App;
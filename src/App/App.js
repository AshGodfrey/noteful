import React from 'react';
import dummyStore from '../dummy-store'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import Main from '../Main/Main'

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
			<Sidebar folders={this.state.folders}/>
			<Main notes={this.state.notes}/>

		</div>)
 }
}

export default App;
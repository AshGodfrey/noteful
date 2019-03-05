import React from 'react';
import dummyStore from '../dummy-store'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'

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

		</div>)
 }
}

export default App;
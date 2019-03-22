import React, {Component} from 'react';
import Main from '../Main/Main'
import Sidebar from '../Sidebar/Sidebar'

class Home extends React.Component{ 

	render() { 
		return (
			<div> 
				<Sidebar folders={this.props.folders} activeFolder={this.activeFolder}/>
				<Main  notes={this.props.notes} activeFolder={this.activeFolder}/>
			</div>)
	}
}

export default Home;
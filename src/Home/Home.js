import React, {Component} from 'react';
import Main from '../Main/Main'
import Sidebar from '../Sidebar/Sidebar'

class Home extends React.Component{ 

	render() { 
		var activeFolder;
		if (this.props.match) {
			activeFolder = this.props.match.params.activeFolderId;
		}
		return (
			<div> 
				<Sidebar folders={this.props.folders} activeFolder={activeFolder}/>
				<Main  notes={this.props.notes} activeFolder={activeFolder}/>
			</div>)
	}
}

export default Home;
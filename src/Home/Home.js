import React, {Component} from 'react';
import Main from '../Main/Main'
import Sidebar from '../Sidebar/Sidebar'
import ApiContext from '../ApiContext'

class Home extends React.Component{ 
	static contextType = ApiContext


	render() { 
		var activeFolder = this.props;
		if (this.props.match) {
			activeFolder = this.props.match.params.activeFolderId;
		}
		return (

			<div> 
				<Sidebar folders={this.context.folders} activeFolder={activeFolder}/>
				<Main  notes={this.context.notes} activeFolder={activeFolder}/>
			</div>)
	}
}

export default Home;

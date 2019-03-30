import React, {Component} from 'react';
import Main from '../Main/Main'
import Sidebar from '../Sidebar/Sidebar'
import NoteDetail from '../NoteDetail/NoteDetail'
import NoteSidebar from '../NoteSidebar/NoteSidebar'

class NotePage extends React.Component{ 

	render() { 

		var activeNote;
		var activeFolder;
		if (this.props.match) {
			activeNote = this.props.match.params;
			//SO THE ISSUE is that it's using note as the param, but not looking at fodlerID
		}
		return (
			<div> 
				<NoteSidebar activeFolder={this.props.activeFolderId} />
				<NoteDetail />
				
			</div>)
		}
	}

export default NotePage;
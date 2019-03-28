import React, {Component} from 'react';
import Main from '../Main/Main'
import Sidebar from '../Sidebar/Sidebar'
import NoteDetail from '../NoteDetail/NoteDetail'
import NoteSidebar from '../NoteSidebar/NoteSidebar'

class NotePage extends React.Component{ 

	render() { 
		var activeNote;
		if (this.props.match) {
			activeNote = this.props.match.params.activeNoteId;
		}
		return (
			<div> 
				<NoteSidebar />
				<NoteDetail />
				
			</div>)
		}
	}

export default NotePage;
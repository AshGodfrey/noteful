import React, {Component} from 'react';
import Main from '../Main/Main'
import Sidebar from '../Sidebar/Sidebar'
import NoteDetail from '../NoteDetail/NoteDetail'
import NoteSidebar from '../NoteSidebar/NoteSidebar'

class NotePage extends React.Component{ 

	render() { 
			
		return (
			<div> 
				<NoteSidebar activeFolder={this.props.activeFolder} />
				<NoteDetail
				 	activeNote={this.props}
				 	 />
				
			</div>)
		}
	}

export default NotePage;
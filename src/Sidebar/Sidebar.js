import React from 'react';
import './Sidebar.css'
import FolderSidebar from '../FolderSidebar/FolderSidebar'
import AddFolder from '../AddFolder/AddFolder'
import { NavLink } from 'react-router-dom';

class Sidebar extends React.Component {
	folderHTML(folder) {
		
		if (folder.id === this.props.activeFolder) {
			return (
				<div id={folder.id} className="folder-highlight folder"> {folder.name} </div>
				)
		} 
		return (<div id={folder.id} className="folder"> {folder.name} </div>)
	}


	render() {
		if (this.props.folders) {
			var folders = this.props.folders.map((folder) => this.folderHTML(folder))
			return(
				<div className="sidebar">
					{folders}
					<AddFolder />
				</div>
				)
		}
		return (
		<></>
		)
	}

}

export default Sidebar;
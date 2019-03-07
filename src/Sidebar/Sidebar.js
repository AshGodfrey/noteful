import React from 'react';
import './Sidebar.css'
import FolderSidebar from '../FolderSidebar/FolderSidebar'
import AddFolder from '../AddFolder/AddFolder'
import { NavLink } from 'react-router-dom';

class Sidebar extends React.Component {
	render() {
		var folders = this.props.folders.map((folder) => <p> {folder.name} </p>)
		return(
			<div className="sidebar">
				{folders}
				<AddFolder />
			</div>
			)
	}
}

export default Sidebar;
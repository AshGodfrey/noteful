import React from 'react';
import FolderSidebar from '../FolderSidebar/FolderSidebar'
import AddFolder from '../AddFolder/AddFolder'


class Sidebar extends React.Component {
	render() {
		var folders = this.props.folders.map((folder) => <p> {folder.name} </p>)
		return(
			<div>
				{folders}
				<AddFolder />
			</div>
			)
	}
}

export default Sidebar;
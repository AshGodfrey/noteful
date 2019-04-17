import React from 'react';
import './Sidebar.css'
import FolderSidebar from '../FolderSidebar/FolderSidebar'
import Button from '../Button/Button'
import { Link, NavLink } from 'react-router-dom';


class Sidebar extends React.Component {
	folderHTML(folder) {
		var folderLink = "/folder/" + folder.id
		var classname = "folder";
		if (folder.id === this.props.activeFolder) {
			classname = "folder-highlight " + classname;
		} 
		return (<a href={folderLink}><div id={folder.id} className={classname}> {folder.name} </div></a>)
	}

	render() {
		if (this.props.folders) {
			var folders = this.props.folders.map((folder) => this.folderHTML(folder))
			return(
				<div className="sidebar">
					<div className="folderdisplay">
					{folders}
					</div>
								        
			          <Button
			            tag={Link}
			            to='/add-folder'
			            type='button'
			            className='add-folder-button'>
			            Add Folder 
			            </Button>
			           
				</div>
				)
		}
		return (
		<></>
		)
	}

}

export default Sidebar;
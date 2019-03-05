import React from 'react';
import { NavLink } from 'react-router-dom';


export default function FolderSidebar(props) {
	var folders = this.props.folders.map((folder) => <p> {folder.name} </p>)
	return (
		<div>
			{folders}
		</div>
	);
}
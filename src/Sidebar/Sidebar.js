import React from 'react';


class Sidebar extends React.Component {
	render() {
		var folders = this.props.folders.map((folder) => <p> {folder.name} </p>)
		return(
			<div>
				{folders}
			</div>
			)
	}
}

export default Sidebar;
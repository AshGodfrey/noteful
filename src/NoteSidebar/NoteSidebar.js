import React from 'react';
import '../Sidebar/Sidebar.css'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';



class NoteSidebar extends React.Component {
	activeFolder=this.props.activeFolder 
	render() {
		return (
		<div className = "sidebar"> 
			<button>Go Back</button>
			<p>Folder</p>
		</div>
		)
	}
}

export default NoteSidebar
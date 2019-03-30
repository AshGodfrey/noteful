import React from 'react';
import '../Sidebar/Sidebar.css'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';


class NoteSidebar extends React.Component {
	render() {
		var activeFolder=this.props.activeFolder
		return (
		<div className = "sidebar"> 
			<button onClick={() => window.history.back()}>Go Back</button>
			<p>{activeFolder} </p>
		</div>
		) 
	} 

}

export default NoteSidebar
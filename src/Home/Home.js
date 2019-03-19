import React, {Component} from 'react';
import Main from '../Main/Main'
import Sidebar from '../Sidebar/Sidebar'

class Home extends React.Component{ 

	render() { 
		if (this.props.route.folders){
			return (
				<div> 
					<Sidebar folders={this.props.route.folders}/>
					<Main  notes={this.props.route.notes}/>
				</div>)
		} 
		return (
		<></>
		)
 }
}

export default Home;
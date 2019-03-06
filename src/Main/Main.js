import React from 'react';
import './Main.css'


class Main extends React.Component {
	render() {
		var notes = this.props.notes.map((notes) => 
			<div className="note">
				<h3> {notes.name} </h3>
				<p>Date Modified: {notes.modified}</p>
			</div>)
		return(
			<main>
				{notes}
			</main>
			)
	}
}

export default Main;
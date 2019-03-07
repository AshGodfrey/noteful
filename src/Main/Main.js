import React from 'react';
import './Main.css'
import DeleteNote from '../DeleteNote/DeleteNote'


class Main extends React.Component {
	render() {
		var notes = this.props.notes.map((notes) => 
			<div className="note">
				<h3> {notes.name} </h3>
				<p>Date Modified: {notes.modified}</p>
				
				{DeleteNote}
			</div>)
		return(
			<main>
				{notes}
			</main>
			)
	}
}

export default Main;
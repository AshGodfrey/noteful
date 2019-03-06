import React from 'react';
import './Main.css'


class Main extends React.Component {
	render() {
		var notes = this.props.notes.map((notes) => <p> {notes.name} </p>)
		return(
			<div className="main">
				{notes}
			</div>
			)
	}
}

export default Main;
import React from 'react';
import DeleteNote from '../DeleteNote/DeleteNote'
import './NoteDetail.css'
import ApiContext from '../ApiContext';
import config from '../Config';

class NoteDetail extends React.Component {
	
	render() {
		
		if (this.props) {
			var { activeNote} = this.props.activeNote
			
		}
			
		return(
			<main>
				<div className="noteinfo">
					<h1>{activeNote.name}</h1>
					<p>{activeNote.modified}</p>
					<DeleteNote onClick={this.handleClickDelete} />
				</div>
				<p>{activeNote.content}</p>
			</main>
			)
		}
		
}

export default NoteDetail;
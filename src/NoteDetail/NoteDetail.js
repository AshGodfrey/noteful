import React from 'react';
import './NoteDetail.css'
import { Link } from 'react-router-dom';
import ApiContext from '../ApiContext';
import config from '../Config';

class NoteDetail extends React.Component {
	static contextType = ApiContext

	static defaultProps ={
	  onDeleteNote: () => {},
	  }
	  

	  handleClickDelete = e => {
	    const noteId = this.context
	    e.preventDefault(); 

	    fetch(`${config.API_ENDPOINT}/notes/${noteId.activeNote.id}`, {
	      method: 'DELETE',
	      headers: {
	        'content-type': 'application/json'
	      },
	    })
	      .then(res => {
	        if (!res.ok) {return res.json().then(e => Promise.reject(e))}
	        return res.json()
	      })
	      .then(() => {
	        this.context.deleteNote(noteId)
	        this.context.onDeleteNote(noteId)
	      })
	  }

	render() {
		
		if (this.context) {
			var { activeNote} = this.context.activeNote
			
		}
			
		return(
			<main>
				<div className="noteinfo">
					<h1>{activeNote.name}</h1>
					<p>{activeNote.modified}</p>
					<Link to="/"><button onClick={this.handleClickDelete}>Delete Note</button></Link>
				</div>
				<p>{activeNote.content}</p>
			</main>
			)
		}
		
}

export default NoteDetail;
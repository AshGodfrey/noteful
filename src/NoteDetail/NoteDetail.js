import React from 'react';
import './NoteDetail.css'
import { Link } from 'react-router-dom';
import ApiContext from '../ApiContext';
import config from '../Config';

class NoteDetail extends React.Component {
	static defaultProps ={
	  onDeleteNote: () => {},
	  }
	  static contextType = ApiContext;

	  handleClickDelete = e => {
	   
	    const noteId = this.props.activeNote

	    fetch(`${config.API_ENDPOINT}/notes/${noteId.activeNote.id}`, {
	      method: 'DELETE',
	      headers: {
	        'content-type': 'application/json'
	      },
	    })
	      .then(res => {
	        if (!res.ok)
	          return res.json().then(e => Promise.reject(e))
	          return res.json()
	      })
	      .then(() => {
	        this.context.deleteNote(noteId)
	        this.props.onDeleteNote(noteId)
	      })
	  }

	render() {
		
		if (this.props) {
			var { activeNote} = this.props.activeNote
			
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
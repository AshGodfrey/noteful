import React from 'react';
import './Main.css'
import DeleteNote from '../DeleteNote/DeleteNote'
import { Link } from 'react-router-dom';
import ApiContext from '../ApiContext'
import config from '../Config'

class Main extends React.Component {
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
		  
	noteHTML(note) {
		var noteLink = "/note/" + note.id
		var classname = "note";
		if (note.id === this.context.activeNote) {
			classname = "note " + classname;
		} 
		return (<div className="note">
				<h3> <Link to={noteLink}><div id={note.id}> {note.name}</div></Link></h3>
				<p>Date Modified: {note.modified}</p>
				<button onClick={this.handleClickDelete}>Delete Note</button>
			</div>);
	}

	render() {
		
		var folderNotes = this.context.notes;
		if (this.context.activeFolder) {
			folderNotes = this.context.notes.filter((notes) => notes.folderId === this.context.activeFolder);
		}
		var notes = folderNotes.map((note) => this.noteHTML(note))
			
		return(
			<main>
				{notes}
			</main>
			)
		}
}

export default Main;

import React from 'react';
import './Main.css'
import { Link } from 'react-router-dom';
import ApiContext from '../ApiContext'
import config from '../Config'
import Button from '../Button/Button'

class Main extends React.Component {
	static contextType = ApiContext

	static defaultProps ={
	  onDeleteNote: () => {},
	  }

	  handleClickDelete = (note) => (e) => {
	  	e.preventDefault(); 
	    const {activeNote} = this.props
	  

	    fetch(`${config.API_ENDPOINT}/notes/${note.id}`, {
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
	        this.context.deleteNote(note.id)
	         this.props.history.push(`/`)
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
				<button onClick={this.handleClickDelete(note)}>Delete Note</button>
			</div>);

	}

	render() {
		
		var folderNotes = this.context.notes;
		if (this.props.activeFolder) {
			folderNotes = this.context.notes.filter((notes) => notes.folderId === this.props.activeFolder);
		}
		var notes = folderNotes.map((note) => this.noteHTML(note))
			
		return(
			<main>
				{notes}
				 <Button
			            tag={Link}
			            to='/add-note'
			            type='button'
			            className='add-folder-button'>
			            Add Note
			            </Button>
			</main>
			)
		}
}

export default Main;

import React from 'react';
import './Main.css'
import DeleteNote from '../DeleteNote/DeleteNote'
import { Link } from 'react-router-dom';

class Main extends React.Component {
	noteHTML(note) {
		var noteLink = "/note/" + note.id
		var classname = "note";
		if (note.id === this.props.activeNote) {
			classname = "note " + classname;
		} 
		return (<div className="note">
				<h3> <Link to={noteLink}><div id={note.id}> {note.name}</div></Link></h3>
				<p>Date Modified: {note.modified}</p>
				<DeleteNote />
			</div>);
	}

	render() {
		
		var folderNotes = this.props.notes;
		if (this.props.activeFolder) {
			folderNotes = this.props.notes.filter((notes) => notes.folderId === this.props.activeFolder);
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

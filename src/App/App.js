import React from 'react';
import dummyStore from '../dummy-store'
import Header from '../Header/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../Home/Home'
import NotePage from '../NotePage/NotePage'


class App extends React.Component{ 
	state = {
		folders: [],
		notes: []
	}	


	componentDidMount(){
		this.setState(dummyStore)
	}

	findNote(notes, noteId){
		//notes.find((note) => note.id === noteId)
		var i;
		for(i = 0; i < notes.length; i++) {
			if (notes[i].id === noteId) {
				return notes[i];
			}
		}
	}


	findFolder(folders, folderId){
		var i;
		for(i = 0; i < folders.length; i++) {
			if (folders[i].id === folderId) {
				return folders[i];
			}
		}
	}

	render() { 
	return (
		<Router> 
				<Header />
				<Route exact path="/" render={(props) => <Home {...props} folders={this.state.folders} notes={this.state.notes}/> } />
				<Route exact path="/folder/:activeFolderId" render={(props) => <Home {...props} folders={this.state.folders} notes={this.state.notes} /> } />
				<Route exact path="/note/:activeNoteId" 
					render={(props) => {
						const { activeNoteId } = props.match.params
						const note = this.findNote(this.state.notes, activeNoteId) || {}
						const activeFolder = this.findFolder(this.state.folders, note.folderId)
						return (
							<NotePage
								{...props}
								activeFolder={ activeFolder}
								activeNote = { note }
							/>
						)
					}}
				/>
		</Router>)
 }
}

export default App;
import React from 'react';
import dummyStore from '../dummy-store'
import Header from '../Header/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../Home/Home'
import NotePage from '../NotePage/NotePage'
import ApiContext from '../ApiContext'
import config from '../Config'


class App extends React.Component{ 
	state = {
		folders: [],
		notes: []
	}	


	componentDidMount(){
		Promise.all([
			fetch(`${config.API_ENDPOINT}/notes`),
			fetch(`${config.API_ENDPOINT}/folders`)
		])
		.then (([noteRes, folderRes]) => {
			return Promise.all([
				noteRes.json(),
				folderRes.json(),
				])
		})
		.then(([notes, folders]) => {
			this.setState({ notes, folders })
		})
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

	handleDeleteNote = noteId => {
    	this.setState({
      	notes: this.state.notes.filter(note => note.id !== noteId)
   	 })
  	}

	render() { 
		const value = {
			notes: this.state.notes,
			folders: this.state.folders,		
			deleteNote: this.handleDeleteNote,
		}
	return (
		<ApiContext.Provider value={value}>
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
		</Router>
	</ApiContext.Provider>)
 }
}

export default App;
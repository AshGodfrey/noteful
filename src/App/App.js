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
				<Route 
					exact path="/" 
					component={Home} 
				/>
				<Route 
					exact path="/folder/:activeFolderId"
				 	component = {Home} 
				 />
				<Route 
					exact path="/note/:activeNoteId"
					component = {NotePage}
							/>

		</Router>
	</ApiContext.Provider>)
 }
}

export default App;
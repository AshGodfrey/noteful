import React, { Component } from 'react'
import Form from '../Form/Form'
import ApiContext from '../ApiContext'
import Config from '../Config'
import PropTypes from 'prop-types'

export default class AddNote extends Component {

  constructor(props){
    super(props);
    this.state = {
      noteName: "Name your note",
      noteContent: "This is your note",
    }


  this.handleChange = this.handleChange.bind(this);
    
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  static contextType = ApiContext;

  handleSubmit = e => {
    e.preventDefault()
   
      const newNote = {
        name: e.target['note-name'].value,
        content: e.target['note-content'].value,
        folderId: e.target['note-folder-id'].value,
        modified: new Date(),
      }
      fetch(`${Config.API_ENDPOINT}/notes`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(newNote),
      })
        .then(res => {
          if (!res.ok)
            return res.json().then(e => Promise.reject(e))
          return res.json()
        })
        .then(note => {
          this.context.addNote(note)
          this.props.history.push(`/folder/${note.folderId}`)
        })
        .catch(error => {
          console.error({ error })
        })
      
  }

  render() {
    const { folders=[] } = this.context
    return (
      <section className='AddNote'>
        <h2>Create a note</h2>
        <Form onSubmit={this.handleSubmit}>
          <div className='field'>
            <label htmlFor='note-name-input'>
              Name
            </label>
            <input 
              type='text' 
              id='note-name-input' 
              name='noteName' 
              value={this.state.noteName}
            required/>
          </div>
          <div className='field'>
            <label htmlFor='note-content-input'>
              Content
            </label>
            <textarea 
              id='note-content-input' 
              name='noteContent' 
              value={this.state.noteContent}
              required />
          </div>
          <div className='field'>
            <label htmlFor='note-folder-select'>
              Folder
            </label>
            <select 
                id='note-folder-select' 
                name='notefolderid'
               required>
              <option value={null}>...</option>
              {folders.map(folder =>
                <option key={folder.id} value={folder.id}>
                  {folder.name}
                </option>
              )}
            </select>
          </div>
          <div className='buttons'>
            <button type='submit'>
              Add note
            </button>
          </div>
        </Form>
      </section>
    )
  }
}

AddNote.defaultProps = {
  history: PropTypes.Object,
}
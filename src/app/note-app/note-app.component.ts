import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  moduleId: module.id,
  selector: 'app-note',
  templateUrl: './note-app.component.html',
  styleUrls: ['./note-app.component.css'],
  providers: [ NoteService ]
})
export class NoteAppComponent {

  newNote: Note = new Note();

  constructor( private noteService: NoteService ) {}

  toggleNoteComplete( note ) {
    this.noteService.toggleNoteComplete( note );
  }

  addNote() {
    this.noteService.addNote( this.newNote );
    this.newNote = new Note();
  }

  removeNote( note ) {
    this.noteService.deleteNoteById( note.id );
  }

  get notes() {
    return this.noteService.getAllNotes();
  }

}

import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { NoteService } from '../note.service';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

export class Note {
    constructor(public title, public text) { }
}

@Component({
  moduleId: module.id,
  selector: 'app-note',
  templateUrl: './note-app.component.html',
  styleUrls: ['./note-app.component.css']
})
export class NoteAppComponent {

  //public notes: AngularFireList<Note[]>;
  public notesItem: Observable<any[]>;
  public notes: Observable<any[]>;

    // constructor(db: AngularFireDatabase) {
      constructor(db: AngularFireDatabase) {
        // this.notes = db.list('/notes');
         this.notesItem = db.list('/notes').valueChanges();
         this.notes = db.list('/notes');
    //     .valueChanges().subscribe(notes => {
    // console.log(notes);
    // });    
  }

  // private noteCounter = 0;
  title: string = '';
  text: string = '';

  public addNote(): void {
      // let newNote = new Note(`My book #${this.noteCounter++}`);
      let newNote = new Note(this.title, this.text);
      this.notes.push(newNote);
      this.title = '';
      this.text = '';
  }
}
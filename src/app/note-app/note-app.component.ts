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

  //public noteText: string;
  //public notes: AngularFireList<Note[]>;
  public notesItem: Observable<any>;
  public notes: AngularFireList<any>;

      constructor(public db: AngularFireDatabase) {

         this.notesItem = db.list('notes').valueChanges();
         this.notes = db.list('notes');
    //     .valueChanges().subscribe(notes => {
    // console.log(notes);
    // });
  }

  title: string = '';
  text: string = '';

  public addNote(): void {
      let newNote = new Note(this.title, this.text);
      //this.notes.push(newNote);
      let receiptRef = this.notes.push(newNote);
      receiptRef.update({ id: receiptRef.key });

      //this.notes.push(newNote);
      this.title = '';
      this.text = '';
    //  const pushId = this.db.createPushId();
      console.log('key - ' + receiptRef.key + 'id - ' + receiptRef);
  }

  public updateNote(value, note): void {
    //noteText = note.text;
    console.log('title - ' + note.title + '; text - ' + note.text + '; new text - ' + value );
    this.notes.update(note.id, {text: value});
    //console.log('title - ' + note.title + ' text - ' + note.text + ' new text - ' + this.text);
  }

  public deleteNote(note) {
    console.log('object - ' + JSON.stringify(note) + ' key - ' + note.id);
    this.notes.remove(note.id);
  }

}

import { Component, OnInit } from '@angular/core';
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

export class Comment {
    constructor(public name, public comment) { }
}


@Component({
  moduleId: module.id,
  selector: 'app-note',
  templateUrl: './note-app.component.html',
  styleUrls: ['./note-app.component.css']
})

export class NoteAppComponent implements OnInit {

  public notesItem: Observable<any>;
  public notes: AngularFireList<any>;

  public commentItem: Observable<any>;
  public comments: AngularFireList<any>;

  constructor(public db: AngularFireDatabase) {

         this.notesItem = db.list('notes').valueChanges();
         this.notes = db.list('notes');
    //     .valueChanges().subscribe(notes => {
    // console.log(notes);
    // });
         this.comments = db.list('notes-comments/');
  }
  ngOnInit() {


  }


  title: string = '';
  text: string = '';

  name: string = '';
  comment: string = '';

  public addNote(): void {
      let newNote = new Note(this.title, this.text);
      let receiptRef = this.notes.push(newNote);
      receiptRef.update({ id: receiptRef.key });
      //var noteKey = this.notes.push(newNote).key;
      this.title = '';
      this.text = '';
      console.log('key - ' + receiptRef.key + 'id - ' + receiptRef);
  }

  public updateNote(value, note): void {
    console.log('title - ' + note.title + '; text - ' + note.text + '; new text - ' + value );
    this.notes.update(note.id, {text: value});
  }

  public deleteNote(note) {
    console.log('object - ' + JSON.stringify(note) + ' key - ' + note.id);
    this.notes.remove(note.id);
  }

  public addComment(note): void {
    let newComment = new Comment(this.name, this.comment);
    let commentRef = this.comments.push(newComment);
    commentRef.update({ id: commentRef.key, note_id: note.id });

    //this.commentItem = this.db.list('notes-comments', ref => ref.orderByChild("note_id").equalTo(note.id)).valueChanges();

    //   this.commentItem.subscribe(res => {
    //   console.log("res" + JSON.stringify(res));
    //   res.forEach(comment => {
    //     console.log("comment: " + comment.comment + " note_id = " + comment.note_id);
    //   });
    // });
    this.name = '';
    this.comment = '';

    console.log(' ;) ');
  }

  public showComments(note) {
    //this.commentItem = this.db.list('notes-comments', ref => ref.orderByChild("note_id").equalTo(note.id)).valueChanges();

  // Find all dinosaurs whose height is exactly 25 meters.
  // var ref = firebase.database().ref("dinosaurs");
  // ref.orderByChild("height").equalTo(25).on("child_added", function(snapshot) {
  //   console.log(snapshot.key);
  // });
  }

}

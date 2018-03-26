import { Component } from '@angular/core';
import { NoteAppComponent } from './note-app/note-app.component';

// import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
// import { AngularFireAuth } from 'angularfire2/auth';
// import { Observable } from 'rxjs/Observable';
// import * as firebase from 'firebase/app';

// export class Note {
//     constructor(public title, public text) { }
// }

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //directives: [ NoteAppComponent ]
})
export class AppComponent {
  // public notes: AngularFireList<Note[]>;
  //   constructor(db: AngularFireDatabase) {
  //       this.notes = db.list('/notes');
  // }

  // private noteCounter = 0;
  // title: string = '';
  // text: string = '';

  // public addNote(): void {
  //     // let newNote = new Note(`My book #${this.noteCounter++}`);
  //     let newTitle = new Note(this.title, this.text);
  //     this.notes.push(newTitle);
  // }

}

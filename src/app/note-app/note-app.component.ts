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
  
  public notes: AngularFireList<any>;
    
  private noteService: NoteService;
    
    
  constructor(public config: YourConfig) {
    this.noteService = new NoteService();
    if (config.connectivityType == ConnectivityType.FireBase) {
        this.noteService.setStorageApi(new FirreBaseStorage());
    } else {
        this.noteService.setStorageApi(new LocalStorageStorage());
    }
  }

  title: string = '';
  text: string = '';
    
  public listNotes(): Note[]{
    return this.noteService.listNotes();
  }

  public addNote(): void {
      this.noteService.addNote(this.title, this.text);
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

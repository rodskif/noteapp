import { Component } from '@angular/core';
import { NoteAppComponent } from './note-app/note-app.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  directives: [ NoteAppComponent ]
})
export class AppComponent {}
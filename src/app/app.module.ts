import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NoteAppComponent } from './note-app/note-app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { SetupPageComponent } from './setup-page/setup-page.component';


export const firebaseConfig = {
  apiKey: 'AIzaSyDEyQ_3n6FA7o-PRrK82I9qtT0SQ3wFQvQ',
  authDomain: 'notesapp-79688.firebaseapp.com',
  databaseURL: 'https://notesapp-79688.firebaseio.com',
  storageBucket: '',
  messagingSenderId: '774615989293'
};

const routes = [
    {path: '', component: NoteAppComponent},
    {path: 'setup', component: SetupPageComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    NoteAppComponent,
    SetupPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

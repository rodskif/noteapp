import { Injectable } from '@angular/core';

import { Note } from './note';

@Injectable()
export class NoteService {

  lastId: number = 0;

    /*
    * Массив, в котором будут храниться записи
    */
    notes: Note[] = [];

    constructor() {}

    /*
    * Имитируем метод POST при обращении к /notes
   */
    addNote( note: Note ): NoteService
    {
      if( !note.title )
      {
        return;
      }

      if ( !note.id )
      {
        note.id = ++this.lastId;
      }

      this.notes.push( note );

      return this;
    }

    /*
     * Имитируем метод DELETE при обращении к /notes/:id
     */
    deleteNoteById( id: number ): NoteService
    {
      this.notes = this.notes
        .filter( note => note.id !== id );

      return this;
    }

    /*
     * Имитируем метод PUT при обращении к /notes/:id
     */
    updateNoteById( id: number, values: Object = {} ): Note
    {
      let note = this.getNoteById( id );

      if ( !note )
      {
        return null;
      }

      Object.assign( note, values );

      return note;
    }

    /*
     * Имитируем метод GET при обращении к /notes
     */
    getAllNotes(): Note[]
    {
      return this.notes;
    }

    /*
     * Имитируем метод GET при обращении к /notes/:id
     */
    getNoteById( id: number ): Note
    {
      return this.notes
        .filter( note => note.id === id )
        .pop();
    }

    /*
     * Изменить статус записи
     */
    toggleNoteComplete( note: Note )
    {
      let updatedNote = this.updateNoteById( note.id, {
        complete: !note.complete
      } );

      return updatedNote;
    }

}

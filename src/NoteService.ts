export class NoteService{

  storage: StorageApi;

  

  public setStorageApi(_storage: StorageApi): void{
    this.storage = _storage;
  }

  public addNote(title:string, text: string): string {
    let note: Note = new Note(title, text);
    return this.storage.addNote(note);
  }
}

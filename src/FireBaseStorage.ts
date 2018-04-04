export class FireBaseStorage implements StorageApi {
  fireDB: firebase;

  public init: void {
    fireDB = //connect;
  }

  public addNote(note: Note): string {
    return fireDB.ref.child("notes").push(note).key;
  }
}

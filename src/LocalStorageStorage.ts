export class LocalStorageStorage implements StorageApi {

  ls : window.localSotrage;
  
  public init():void {
    // init ls;
  }
  
  public addNote(note: Note): string {
    let noteKey = generateKey();
    ls.set(noteKey, note);
    return noteKey;
  }


  public generateKey(prefix?:string):string {
    key = // randomGuid;
    if (prefix) {
      key = prefix+'::'+key;
    }
    return key;
  }
}

export class Note {
  id: number;
  title: string = '';
  text: string = '';
  complete: boolean = false;

  constructor( values: Object = {} )
  {
    Object.assign( this, values );
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setup-page',
  templateUrl: './setup-page.component.html',
  styleUrls: ['./setup-page.component.css']
})
export class SetupPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public storage: string = 'firebase';
  public onStorageChange(storage) {
    this.storage = storage;
    console.log(this.storage);
  }

}

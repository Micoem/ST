import { Component, OnInit } from '@angular/core';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  avatar = [{
  name: 'bear',
  url: 'https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-7119-i1imtd_19a5dc33.jpeg?region=0%2C0%2C1564%2C880'
  },
  {
    name: 'dolphin',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQADQHcz4EQnZU5SNprx9Zid8Hk-hp09ozxRyYRzrCxqVxnOgxN'
  },
  {
    name: 'tiger',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR19sJYYuYAMd9P5MHea7f3yNHEm8h4Qz6q6dLp_pexrGbJF_Mf'
  }];
  parentSrc = '';
  childHaveEvent(event) {
    this.parentSrc = event;
  }
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

export interface Section {
  anchorLive: string;
  anchorCode: string;
  name: string;
  image: string;
  alt: string;
}

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {
  projects: Section[] = [
    {
      anchorLive: 'https://dmts.herokuapp.com/',
      anchorCode: 'https://github.com/Toorain/DemarreTaStory06',
      name: 'Démarre ta Story',
      image: 'DMTSProject.png',
      alt: 'This is an alternative text'
    },
    {
      anchorLive: 'https://town-list.herokuapp.com/',
      anchorCode: 'https://github.com/Toorain/Liste-de-Villes',
      name: 'Town Search',
      image: 'TownList.jpg',
      alt: 'This is an alternative text'
    },
    {
      anchorLive: '#',
      anchorCode: '',
      name: 'Supermassive Black Hole',
      image: 'test.jpg',
      alt: 'This is an alternative text'
    },
    {
      anchorLive: '#',
      anchorCode: '',
      name: 'Supermassive Black Hole',
      image: 'test.jpg',
      alt: 'This is an alternative text'
    }
  ];

  constructor() {}

  ngOnInit() {}
}

import { Component, OnInit } from '@angular/core';

export interface Section {
  name: string;
  description: string;
}

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {
    hardSkills: Section[] = [
      {
        name: 'HTML / CSS',
        description: '& Bootstrap',
      },
      {
        name: 'JS / TS',
        description: '& jQuery',
      },
      {
        name: 'Angular',
        description: '',
      },
      {
        name: 'SQL',
        description: '',
      },
      {
        name: 'PHP',
        description: '& Twig',
      }
    ];
    softSkills: Section[] = [
      {
        name: 'Resilience',
        description: '',
      },
      {
        name: 'Determination',
        description: '',
      },
      {
        name: 'Curiosity',
        description: '',
      },
    ];

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

export interface Section {
  name: string;
  description: Date;
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
        description: new Date('1/1/16'),
      },
      {
        name: 'JS / TS',
        description: new Date('1/17/16'),
      },
      {
        name: 'PHP',
        description: new Date('1/28/16'),
      },
      {
        name: 'SQL',
        description: new Date('1/28/16'),
      },
      {
        name: 'SQL',
        description: new Date('1/28/16'),
      },
      {
        name: 'SQL',
        description: new Date('1/28/16'),
      }
    ];
    softSkills: Section[] = [
      {
        name: 'Patience',
        description: new Date('2/20/16'),
      },
      {
        name: 'Persévérance',
        description: new Date('1/18/16'),
      }
    ];

  constructor() { }

  ngOnInit() {
  }

}

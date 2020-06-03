import { Component, OnInit, Input } from '@angular/core';
import {Satellite } from '../satellite'

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];

  constructor() { }

  ngOnInit() {

  }

  count(satellite: Satellite[],word):number{
  let counter:number=0;
    for (let i=0;i<satellite.length;i++)
    {

    if (satellite[i].type == word)
    {
      counter = counter + 1;
    }

    }
return counter;
  }
}

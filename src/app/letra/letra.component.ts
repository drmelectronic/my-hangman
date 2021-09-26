import { Component, Input, OnInit } from '@angular/core';
import { LetterModel } from '../models/letterModel';

@Component({
  selector: 'app-letra',
  templateUrl: './letra.component.html',
  styleUrls: ['./letra.component.scss']
})
export class LetraComponent implements OnInit {
  
  @Input() letter: LetterModel;
  
  constructor() { }

  ngOnInit(): void {
  }

}

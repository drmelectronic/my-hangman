import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { KeyModel } from '../models/keyModel';

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.scss']
})
export class KeyComponent implements OnInit {

  @Input() key: KeyModel;
  @Output() clickeado = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onKeyClick() {
    this.clickeado.emit(this.key.letra);
    this.key.clickeado = true;
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { KeyModel } from '../models/keyModel';

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.scss']
})
export class KeyComponent implements OnInit {

  @Input() key: KeyModel;
  @Input() frase: string;
  @Output() clickeado = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onKeyClick() {
    if (this.key.class === '') {
      this.clickeado.emit(this.key.letra);
      if (this.frase.includes(this.key.letra)) {
        this.key.class = 'clickeado';
      } else {
        this.key.class = 'error';
      }
    }
  }
}

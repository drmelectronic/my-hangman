import { Component, OnInit } from '@angular/core';
import { KeyInterface } from '../models/keyInterface';
import { KeyModel } from '../models/keyModel';
import { LetterModel } from '../models/letterModel';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.scss']
})
export class HangmanComponent implements OnInit {
  
  level = 0;
  frases: string[] = [
      'JOSUE DAVID',
    'HOLA MUNDO',
      'EL GUERRERO DAVID'
  ];
  frase: string;
  isMinLevel: boolean;
  isMaxLevel: boolean;
  letters: LetterModel[] = [];
  keys: KeyModel[] = [];
  fallas = 0;

  constructor() { }

  ngOnInit(): void {    
    this.setLevel();
  }

  getKey(k: string): KeyInterface {
    return {
      letra: k,
      existe: [...this.frase].filter(l => l === k).length > 0,
      clickeado: false
    }
  }

  keyPressed(event: string) {
    let existe = false
    this.letters.forEach(l => {
      if (l.verify(event)) {
        existe = true;
      }      
    });
    if (!existe) {
      this.fallas += 1;
    }
  }

  anteriorNivel() {
    this.level -= 1;
    this.setLevel()
  }
  
  siguienteNivel() {
    this.level += 1;
    this.setLevel()
  }

  setLevel() {
    console.log('level', this.level);
    this.isMinLevel = this.level === 0;
    this.isMaxLevel = this.level === (this.frases.length - 1)
    this.frase = this.frases[this.level];
    this.letters = [];
    this.keys = [];
    [...this.frase].forEach(l => this.letters.push(new LetterModel(l)));
    [..."ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"].forEach(k => this.keys.push(this.getKey(k)))
  }
}

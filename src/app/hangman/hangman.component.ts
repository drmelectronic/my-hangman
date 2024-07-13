import {Component, OnInit} from '@angular/core';
import {FRASES} from '../frases/juan';
import {KeyModel} from '../models/keyModel';
import {LetterModel} from '../models/letterModel';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.scss']
})
export class HangmanComponent implements OnInit {

  level = 0;
  frases: string[] = FRASES;
  frase: string = '';
  isMinLevel: boolean = false;
  isMaxLevel: boolean = false;
  letters: LetterModel[] = [];
  keys: KeyModel[] = [];
  words: LetterModel[][] = [];
  fallas = 0;

  constructor() { }

  ngOnInit(): void {
    this.setLevel();
  }

  getKey(k: string): KeyModel {
    return new KeyModel({
      letra: k,
      existe: [...this.frase].filter(l => l === k).length > 0,
      clickeado: false
    });
  }

  keyPressed(event: string): void {
    let existe = false;
    this.letters.forEach(l => {
      if (l.verify(event)) {
        existe = true;
      }
    });
    if (!existe) {
      this.fallas += 1;
    }
  }

  anteriorNivel(): void {
    this.level -= 1;
    this.fallas = 0;
    this.setLevel();
  }

  siguienteNivel(): void {
    this.level += 1;
    this.fallas = 0;
    this.setLevel();
  }

  setLevel(): void {
    console.log('level', this.level);
    this.isMinLevel = this.level === 0;
    this.isMaxLevel = this.level === (this.frases.length - 1);
    this.frase = this.frases[this.level];
    this.letters = [];
    this.words = [];
    this.keys = [];
    let word: LetterModel[] = [];
    [...this.frase].forEach(l => {
      const letra = new LetterModel(l);
      word.push(letra);
      this.letters.push(letra);
      if (letra.letra === ' ') {
        this.words.push(word);
        word = [];
      }
    });
    this.words.push(word);

    [...'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'].forEach(k => this.keys.push(this.getKey(k)));
  }

  resolver(): void {
    this.letters.filter(l => l.class !== 'puntuacion' && l.class !== 'espacio').forEach(l => l.mostrar());
  }
}

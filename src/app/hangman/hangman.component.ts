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
      'NO QUIERO ANIQUILAR A NADIE, ODIO A LOS ABUSIVOS, SEAN DE DONDE SEAN.',
      'ANTES DE EMPEZAR, ¿ALGUIEN PREFIERE RETIRARSE?',
      'CUANDO NO TENÍA NADA, TENÍA A BUCKY.',
      'EL PRECIO DE LA LIBERTAD ES ALTO, SIEMPRE LO HA SIDO Y ESTOY DISPUESTO A PAGAR EL PRECIO, SI DEBO PELEAR SÓLO QUE ASÍ SEA.',
      'ÉSTA ES LA PELEA DE NUESTRAS VIDAS, Y VAMOS A GANAR, HAREMOS LO QUE SEA.',
      'HARÍA ESTO TODO EL DÍA.',
      'HACE CINCO AÑOS PERDIMOS TODOS, PERDIMOS AMIGOS, PERDIMOS FAMILIA Y UNA PARTE DE NOSOTROS.',
      'SÓLO HAY UN DIOS PARA MÍ, Y JAMÁS SE VESTIRÍA ASÍ.',
      'A TU IZQUIERDA.',
      'YO SÍ, ES QUE SÍ ENTENDI LA REFERENCIA',
      'YO SÉ QUE SÍ, PORQUE NO SÉ LO QUÉ VOY A HACER SI NO'
  ];
  frase: string;
  isMinLevel: boolean;
  isMaxLevel: boolean;
  letters: LetterModel[] = [];
  keys: KeyModel[] = [];
  words: LetterModel[][]
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
    this.words = []
    this.keys = [];
    let word = [];
    [...this.frase].forEach(l => {
      const letra = new LetterModel(l)
      word.push(letra);
      this.letters.push(letra)
      if (letra.letra === ' ') {
        this.words.push(word);
        word = [];
      }
    });
    this.words.push(word);

    [..."ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"].forEach(k => this.keys.push(this.getKey(k)))
  }
}

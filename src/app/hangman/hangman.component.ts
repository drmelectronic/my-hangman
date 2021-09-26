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
    'SERÁ COMO ÁRBOL PLANTADO JUNTO A CORRIENTES DE AGUAS, QUE DA SU FRUTO EN SU TIEMPO, Y SU HOJA NO CAE; Y TODO LO QUE HACE, PROSPERARÁ.',
    'LA SANGRE DE CRISTO, LIMPIARÁ VUESTRAS CONCIENCIAS PARA QUE SIRVÁIS AL DIOS VIVO.',
    'Y SERÁ PREDICADO ESTE EVANGELIO DEL REINO EN TODO EL MUNDO, PARA TESTIMONIO A TODAS LAS NACIONES; Y ENTONCES VENDRÁ EL FIN.',
    'NO TEMÁIS, MANADA PEQUEÑA, PORQUE A VUESTRO PADRE LE HA PLACIDO DAROS EL REINO.',
    'PORQUE POR GRACIA SON SALVOS POR MEDIO DE LA FE; Y ESTO NO DE USTEDES PUES ES DON DE DIOS. 9 NO ES POR OBRAS, PARA QUE NADIE SE GLORÍE.',
    'GUARDA, HIJO MÍO, EL MANDAMIENTO DE TU PADRE, Y NO DEJES LA ENSEÑANZA DE TU MADRE;',
    'LA GRACIA DE DIOS LLEGÓ POR NUESTRO SALVADOR JESUCRISTO, EL CUAL ABOLIÓ LA MUERTE Y NOS MOSTRÓ LA VIDA Y LA INMORTALIDAD POR EL EVANGELIO. ',
    'YO SOY TU SIERVO, DAME ENTENDIMIENTO PARA QUE CONOZCA TUS TESTIMONIOS.',
    'EL SEÑOR NO TARDA SU PROMESA, COMO ALGUNOS LA TIENEN POR TARDANZA; MÁS BIEN, ES PACIENTE PARA CON USTEDES PORQUE NO QUIERE QUE NADIE SE PIERDA SINO QUE TODOS PROCEDAN AL ARREPENTIMIENTO.',
    'YO SOY EL BUEN PASTOR: EL BUEN PASTOR SU VIDA DA POR LAS OVEJAS.',
    'PORQUE CUALQUIERA QUE SE ENALTECE, SERÁ HUMILLADO; Y EL QUE SE HUMILLA, SERÁ ENALTECIDO.',
    'PORQUE EL HIJO DEL HOMBRE NO VINO PARA SER SERVIDO, SINO PARA SERVIR, Y PARA DAR SU VIDA EN RESCATE POR MUCHOS.',
    'PORQUE DONDE ESTÉ TU TESORO, ALLÍ ESTARÁ TAMBIÉN TU CORAZÓN.',
    'AMARÁS AL SEÑOR TU DIOS CON TODO TU CORAZÓN, Y CON TODA TU ALMA, Y CON TODAS TUS FUERZAS, Y CON TODA TU MENTE; Y A TU PRÓJIMO COMO A TI MISMO.',
    'SOPÓRTENSE UNOS A OTROS, Y PERDÓNENSE SI ALGUNO TIENE UNA QUEJA CONTRA OTRO. ASÍ COMO EL SEÑOR LOS PERDONÓ, PERDONEN TAMBIÉN USTEDES.',
    'POR LO TANTO, PONGAN TODA SU ATENCIÓN EN EL REINO DE LOS CIELOS Y EN HACER LO QUE ES JUSTO ANTE DIOS, Y RECIBIRÁN TAMBIÉN TODAS ESTAS COSAS.',
    'LO PLANTARÉ, Y SE HARÁ MAGNÍFICO ÁRBOL; Y HABITARÁN DEBAJO TODAS LAS AVES; A LA SOMBRA DE SUS RAMAS HABITARÁN',
    'PUESTOS LOS OJOS EN JESÚS, EL AUTOR Y CONSUMADOR DE LA FE, QUIEN POR EL GOZO PUESTO DELANTE DE EL SOPORTÓ LA CRUZ',
    'MAS LA QUE CAYÓ EN BUENA TIERRA, ÉSTOS SON LOS QUE CON CORAZÓN BUENO Y RECTO RETIENEN LA PALABRA OÍDA, Y DAN FRUTO CON PERSEVERANCIA.',
    'YO, YO SOY EL QUE BORRO TUS REBELIONES POR AMOR DE MÍ MISMO, Y NO ME ACORDARÉ DE TUS PECADOS.',
    'DESCENDIÓ LLUVIA, Y VINIERON RÍOS, Y SOPLARON VIENTOS, Y GOLPEARON CONTRA AQUELLA CASA; Y NO CAYÓ, PORQUE ESTABA FUNDADA SOBRE LA ROCA.',
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

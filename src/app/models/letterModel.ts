export class LetterModel {
    class: string;
    letra: string;
    show: string;

    constructor(letra: string) {
        this.letra = letra;
        if (this.letra === ',' || this.letra === '.' || this.letra === ';') {
            this.show = this.letra;
            this.class = 'puntuacion';
        } else {
            this.show = '__';
        }
        if (this.letra === ' ') {
            this.class = 'espacio';
        }
        // console.log('letra', this.letra, 'hidden', this.hidden)
    }
    
    verify(key: string): boolean {
        if (this.letra === key) {
            this.show = this.letra;
            return true;
        } else if (this.letra === 'Á' && key === 'A') {
            this.show = this.letra;
            return true;
        } else if (this.letra === 'É' && key === 'E') {
            this.show = this.letra;
            return true;
        } else if (this.letra === 'Í' && key === 'I') {
            this.show = this.letra;
            return true;
        } else if (this.letra === 'Ó' && key === 'O') {
            this.show = this.letra;
            return true;
        } else if (this.letra === 'Ú' && key === 'U') {
            this.show = this.letra;
            return true;
        } else if (this.letra === 'Ü' && key === 'U') {
            this.show = this.letra;
            return true;
        }
        return false;
    }
}
export class LetterModel {
    hidden: boolean;
    letra: string;
    show: string;

    constructor(letra: string) {
        this.letra = letra;
        this.show = '__';
        this.hidden = this.letra === ' ';
        console.log('letra', this.letra, 'hidden', this.hidden)
    }
    
    verify(key: string): boolean {
        if (this.letra === key) {
            this.show = this.letra;
            return true;
        };
        return false;
    }
}
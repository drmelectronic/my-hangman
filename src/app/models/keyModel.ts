import { KeyInterface } from "./keyInterface";

export class KeyModel {
    letra: string;
    existe: boolean;
    class: string;

    constructor(data: KeyInterface) {
        this.letra = data.letra;
        this.existe = data.existe;
        this.class = '';
    }
}
import { KeyInterface } from "./keyInterface";

export class KeyModel {
    letra: string;
    existe: boolean;
    clickeado: boolean;

    constructor(data: KeyInterface) {
        this.letra = data.letra;
        this.existe = data.existe;
        this.clickeado = data.clickeado;
    }
}
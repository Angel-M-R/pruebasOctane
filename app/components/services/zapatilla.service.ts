import { Injectable } from '@angular/core'
import { Zapatilla } from '../models/zapatilla'

@Injectable()
export class ZapatillaService{
    public zapatillas: Array<Zapatilla>;

    constructor(){
        this.zapatillas = [
            new Zapatilla('Rebook Classic', 'Reebok', 'Blanco', 44, true),
            new Zapatilla('Yeezy', 'Adidas', 'Negro', 180, false),
            new Zapatilla('Off-white', 'Nike', 'Negro', 200, true),
            new Zapatilla('AirForce 1', 'Nike', 'Amarillo', 79, true)
        ]
    }

    getZapatillas(): Array<Zapatilla>{
        return this.zapatillas;
    }
}
import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
import { ZapatillaService } from '../services/zapatilla.service';

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html',
    providers: [ZapatillaService]
})
export class ZapatillasComponent implements OnInit{
    public titulo: string ="componente de zapatillas";
    public marcas: string[];
    public mi_marca: string;
    public zapatillas: Array<Zapatilla>;

    constructor(
        private _zapatillaService: ZapatillaService
    ){
        this.marcas= new Array();
    }

    ngOnInit(){
        this.zapatillas = this._zapatillaService.getZapatillas();
        this.getMarcas();
        console.log(this.zapatillas);
    }

    getMarcas(){
        this.zapatillas.forEach((zapatilla, index) => {
            if(this.marcas.indexOf(zapatilla.marca) < 0){
                this.marcas.push(zapatilla.marca)
            }
        });
        console.log(this.marcas);
    }

    getMarca(){
        alert(this.mi_marca)
    }

    addMarca(){
        this.marcas.push(this.mi_marca)
    }
}
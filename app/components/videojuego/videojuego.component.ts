import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Configuracion } from '../models/configuracion';

@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'
})
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy {
    public titulo: string;
    public listado: string;
    public color: string;
    public background: string;

    constructor(){
        console.log("constructor videojuego");
        this.titulo= "Videojuegos";
        this.listado = "Best Games";
        this.background = Configuracion.color;
    }

    ngOnInit(){
        console.log("on init")
    }

    ngDoCheck(){
        console.log("doCheck")
    }

    ngOnDestroy(){
        console.log("ondestroy ejecutado")
    }


    cambiarTitulo(){
        this.titulo = "Nuevo Titulo"
    }
}
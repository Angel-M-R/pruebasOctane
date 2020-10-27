import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'calculadora'
})
export class CalculadoraPipe implements PipeTransform{
    transform(value: any, value2: any){
        let operaciones = `
            Suma: ${value+value2} <br/>
            Resta: ${value-value2} <br/>
            Multiplicación: ${value*value2} <br/>
            División: ${value/value2} <br/>
        `;
        return operaciones;
    }
}
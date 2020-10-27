import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service'

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {

  public user: any;
  public new_user: any;

  constructor(
    private _peticionesService: PeticionesService
  ) {
    this.new_user= {
        "name": '',
        "job": ''
    }
   }

  ngOnInit(): void {
    this._peticionesService.getUsers().subscribe(
      result =>{
        console.log(result)
        this.user=result.data
      },
      error =>{
        console.log(<any>error)
      }
    );
  }

  onSubmit(form){
    this._peticionesService.addUser(this.new_user).subscribe(
      response => {
        console.log(response)
        form.reset();
      },
      error => {
        console.log( <any>error);
      }
    )
  }

}

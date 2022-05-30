import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent  {
  //miFormulario: FormGroup = new FormGroup({
    //'nombre': new FormControl('Rtx 4080ti'),
    //'precio': new FormControl(1500),
    //'existencias': new FormControl(5),
  //})

  constructor(private formbuilder:FormBuilder) { }
  
  miFormulario: FormGroup = this.formbuilder.group({
    nombre: ['Rtx 4080ti'],
    precio:[0],
    existencias:[0],
  })

}

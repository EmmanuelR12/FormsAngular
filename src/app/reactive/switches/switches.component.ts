import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset(this.persona)
    this.miFormulario.valueChanges.subscribe(({condiciones,...rest})=> {
      this.persona = rest
    })
  }
  miFormulario:FormGroup = this.fb.group({
    genero:['M',Validators.required],
    notifiaciones:[true,Validators.required ],
    condiciones:[false,Validators.requiredTrue]
  });

  persona = {
    genero: 'F',
    notifiaciones:true
  }

  guardar(){
    const formvalue= { ...this.miFormulario.value}
    delete formvalue.condiciones
  }


}

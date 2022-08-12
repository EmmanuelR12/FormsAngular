import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup,Validators} from '@angular/forms';
import {EmailValidatorService} from 'src/app/shared/validator/email-validator.service';
import {emailPattern, nombreApelldioPatterns, noPuedeSerStrider} from 'src/app/shared/vallidator/validacions';
import {VallidatorService} from 'src/app/shared/vallidator/vallidator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  //Temporal
  

  miFormulario:FormGroup = this.fb.group({
    nombre:['',[Validators.required,Validators.pattern(this.vs.nombreApelldioPatterns) ]],
    email:['',[Validators.required, Validators.pattern(this.vs.emailPattern)], [this.emailValidator] ],
    username:['',[Validators.required, this.vs.noPuedeSerStrider]],
    password:['',[Validators.required, Validators.minLength(6)]],
    ConfirmPass:['',[Validators.required, ]],
  },{
    validators:[this.vs.camposIguales('password','ConfirmPass')]
  })

  constructor(private fb:FormBuilder, private vs:VallidatorService,private emailValidator:EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre:'Emmanuel Rangel',
      email:'test1@test.com',
      username: 'rangel12',
      password:'123456',
      ConfirmPass:'123456'
    })
  }
  

  get emailErrorMsg():string{
    const errors = this.miFormulario.get('email')?.errors;
    if(errors?.['required']){
      return 'Email es obligatorio'
    }else if(errors?.['pattern']){
      return 'El valor ingresado no tiene fomrato de correo'
    }else if(errors?.['emailTomado']){
      return 'El email ya existe'
    }

    return ''
  }
  //emailRequired(){
    //return this.miFormulario.get('email')?.errors?.['required']
      //&& this.miFormulario.get('email')?.touched
  //}
  //emailFormat(){
    //return this.miFormulario.get('email')?.errors?.['pattern']
      //&& this.miFormulario.get('email')?.touched
  //}
  //emailTaken(){
    //return this.miFormulario.get('email')?.errors?.['emailTomado']
      //&& this.miFormulario.get('email')?.touched
  //}
  campoNoValido(campo:string){
    //console.log(this.miFormulario.get(campo)?.invalid);
    //console.log(this.miFormulario.get(campo)?.touched);
     
    return this.miFormulario.get(campo)?.invalid
      && this.miFormulario.get(campo)?.touched
  }
   
  submitFormulario(){
    //console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
    
  }

}

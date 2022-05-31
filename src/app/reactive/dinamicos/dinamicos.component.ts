import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder,FormGroup,Validators,FormControl} from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent implements OnInit {


  constructor(private formB:FormBuilder) { }

  ngOnInit(): void {
  }

  miFormulario: FormGroup = this.formB.group({
    nombre:['',[Validators.required,Validators.minLength(3)]],
    favoritos:this.formB.array([
    ['Metal Guear', Validators.required],
    ['Death Stranding',Validators.required]
    ],Validators.required)
  })
  
  nuevoFavorito: FormControl = this.formB.control('',Validators.required);
  
  validaCampo(campo:string){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched
  }
 
  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray
  }
  agregarFavorito(){
    if(this.nuevoFavorito.invalid){
      return
    }

    this.favoritosArr.push(this.formB.control(this.nuevoFavorito.value,Validators.required))


    this.nuevoFavorito.reset()
  }

  eliminar(i:number){
   this.favoritosArr.removeAt(i);
  }

  guardar(){
    if(this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched(); 
      return
    }

    console.log(this.miFormulario.value);
    this.miFormulario.reset()

  }
}

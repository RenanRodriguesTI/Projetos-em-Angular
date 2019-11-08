import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MycompComponent } from './mycomp.component';
import { MycompchildComponent } from './mycompchild/mycompchild.component';


@NgModule({
  declarations: [
    MycompComponent,
    MycompchildComponent,
  ],
  imports: [
    CommonModule
  ],
  exports :[
    //Permite que o componente seja exportado
    MycompComponent
  ]
})
export class MycompModule { }

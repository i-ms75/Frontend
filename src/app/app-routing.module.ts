import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridViewComponent } from './grid-view/grid-view.component';

import { POSComponent } from './pos/pos.component';

const routes: Routes = [
  {path:'GridView', component:GridViewComponent},
  
  {path:'POS', component:POSComponent},
 
  // {path:'/'}
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
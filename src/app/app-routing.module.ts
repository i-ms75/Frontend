import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridViewComponent } from './grid-view/grid-view.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'GridView', component:GridViewComponent},
  {path:'Login', component:LoginComponent},
  // {path:'/'}
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
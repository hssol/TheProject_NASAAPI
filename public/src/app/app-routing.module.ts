import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PotdComponent } from './potd/potd.component';


const routes: Routes = [
    { path: 'potd', component: PotdComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

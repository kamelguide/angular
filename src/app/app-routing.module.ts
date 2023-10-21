import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProduitComponent } from './list-produit/list-produit.component';

const routes: Routes = [
   {path:"produit",
  component:ListProduitComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

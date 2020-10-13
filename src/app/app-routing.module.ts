import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DespesasSenadoresComponent } from './despesas-senadores/despesas-senadores.component';
import { ListaSenadoresComponent } from './lista-senadores/lista-senadores.component';

const routes: Routes = [
  {path: 'lista-senadores', component: ListaSenadoresComponent},
  {path: 'despesas-senadores/:id', component: DespesasSenadoresComponent},
  { path: '', redirectTo: 'lista-senadores', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

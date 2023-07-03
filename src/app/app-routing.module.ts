import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './component/cliente/cliente.component';
import { ProveedorComponent } from './component/proveedor/proveedor.component';

const routes: Routes = [
  {
  path:"cliente",
  component:ClienteComponent
  },
  {
    path:"proveedor",
    component:ProveedorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

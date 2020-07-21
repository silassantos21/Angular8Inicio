import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { NgIfNgForComponent } from './ng-if-ng-for/ng-if-ng-for.component';


const routes: Routes = [
  {
    path: '',
    component: NgIfNgForComponent
  },
  {
    path: 'lazy',
    loadChildren: () => import('./modules/lazy-loading/lazy-loading.module').then(m => m.LazyLoadingModule)
  },
  {
    path: 'primeiro-componente',
    component: DataBindingComponent
  },
  {
    path: 'segundo-componente',
    component: SegundoComponenteComponent
  },
  {
    path: 'teste',
    component: NgIfNgForComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

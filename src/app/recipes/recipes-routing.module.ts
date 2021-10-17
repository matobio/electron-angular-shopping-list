import { RecipesResolverService } from './recipes-resolver.service';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';
import { RecipesEditComponent } from './recipes-edit/recipes-edit.component';
import { RecipesStartComponent } from './recipes-start/recipes-start.component';
import { AuthGuard } from './../auth/auth.guard';
import { RecipesComponent } from './recipes.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: RecipesComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: RecipesStartComponent,
        resolve: [RecipesResolverService],
      },
      { path: 'new', component: RecipesEditComponent },
      {
        path: ':id',
        component: RecipesDetailComponent,
        resolve: [RecipesResolverService],
      },
      {
        path: ':id/edit',
        component: RecipesEditComponent,
        resolve: [RecipesResolverService],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesRoutingModule {}

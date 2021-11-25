import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MahasiswaListComponent } from './mahasiswa-list/mahasiswa-list.component';
import { PengurusListComponent } from './pengurus-list/pengurus-list.component';
import { MataKuliahListComponent } from './mata-kuliah-list/mata-kuliah-list.component';

const routes: Routes = [
  { path: 'mahasiswa-list', component: MahasiswaListComponent },
  { path: 'pengurus-list', component: PengurusListComponent },
  { path: 'mata-kuliah-list', component: MataKuliahListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
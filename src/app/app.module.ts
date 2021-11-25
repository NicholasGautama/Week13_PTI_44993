import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MahasiswaService } from './mahasiswa.service';
import { AppRoutingModule } from './app-routing.module';
import { MahasiswaListComponent } from './mahasiswa-list/mahasiswa-list.component';
import { PengurusListComponent } from './pengurus-list/pengurus-list.component';
import { MataKuliahListComponent } from './mata-kuliah-list/mata-kuliah-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MahasiswaListComponent,
    PengurusListComponent,
    MataKuliahListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [MahasiswaService],
  bootstrap: [AppComponent]
})
export class AppModule { }

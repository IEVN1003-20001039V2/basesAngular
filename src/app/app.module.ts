import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductoFilterPipe } from './product/producto-filter.pipe';
import { CinepolisComponent} from './basesAngulat/cinepolis/cinepolis.component';
import { ResistenciaComponent } from './formularios/resistencia/resistencia.component';




/*
import { Ejemplo1Component } from './formularios/ejemplo1/ejemplo1.component'; */

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductoFilterPipe,
    CinepolisComponent,
    ResistenciaComponent,
   /* Ejemplo1Component*/
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule   } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PantallasComponent } from './pantallas/pantallas.component';
import { TokenGuard } from './token.guard';

@NgModule({
  declarations: [
    AppComponent,
    PantallasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [TokenGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

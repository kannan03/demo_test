import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([]),
    HttpClientModule,
    RouterModule.forRoot([
      { path :'login', component:AppComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
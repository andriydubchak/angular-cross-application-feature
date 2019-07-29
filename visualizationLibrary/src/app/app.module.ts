import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VisualizationsModule } from '../../projects/visualizations/src/lib/visualizations.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    VisualizationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

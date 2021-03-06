import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HttpModule} from '@angular/http';

import { TreeView } from './tree.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    TreeView
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
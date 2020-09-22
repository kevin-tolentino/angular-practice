import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {ServerComponent} from './server/server.component';
import { ServersComponent } from './servers/servers.component'

@NgModule({
  declarations: [ //you add components in the declarations property
    AppComponent,
    ServerComponent,
    ServersComponent
  ],
  imports: [ //allows us to add other modules
    BrowserModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

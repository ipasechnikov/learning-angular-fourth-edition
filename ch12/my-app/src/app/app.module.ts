import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { StubComponent } from './stub/stub.component';
import { SpyComponent } from './spy/spy.component';
import { AsyncComponent } from './async/async.component';
import { BindingsComponent } from './bindings/bindings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListPipe } from './list.pipe';
import { CopyrightDirective } from './copyright.directive';

@NgModule({
  declarations: [
    AppComponent,
    StubComponent,
    SpyComponent,
    AsyncComponent,
    BindingsComponent,
    ListPipe,
    CopyrightDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

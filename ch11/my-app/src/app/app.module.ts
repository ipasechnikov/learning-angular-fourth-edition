import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon'

import { GoogleMapsModule } from '@angular/google-maps';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CartComponent } from './cart/cart.component';
import { MapComponent } from './map/map.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsModule } from './products/products.module';
import { PlayerComponent } from './player/player.component';
import { CopyTextComponent } from './copy-text/copy-text.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    PageNotFoundComponent,
    MapComponent,
    PlayerComponent,
    CopyTextComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    GoogleMapsModule,
    YouTubePlayerModule,
    ClipboardModule,
    FormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

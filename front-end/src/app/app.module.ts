import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AffichageComponent } from './affichage/affichage.component';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { PCportableComponent } from './pcportable/pcportable.component';
import { SmartphoneComponent } from './smartphone/smartphone.component';
import { BureauComponent } from './bureau/bureau.component';
import { Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AffichageComponent,
   AjoutProduitComponent,
    PCportableComponent,
    SmartphoneComponent,
    BureauComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

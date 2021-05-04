import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { HomeComponent } from './home/home.component';
import { PCportableComponent } from './pcportable/pcportable.component';
import { SmartphoneComponent } from './smartphone/smartphone.component';
import { BureauComponent } from './bureau/bureau.component';
import { AffichageComponent } from './affichage/affichage.component';

const routes: Routes = [
{path: '', component: HomeComponent  },
{path: 'ajout', component : AjoutProduitComponent},
{path: 'home', component: HomeComponent  },
  {path: 'portable', component: PCportableComponent  },
  {path: 'phone', component: SmartphoneComponent  },
  {path: 'bureau', component: BureauComponent  },
  {path: 'affiche', component: AffichageComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

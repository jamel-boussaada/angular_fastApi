import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AjoutProduitComponent } from '../ajout-produit/ajout-produit.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(){
  }

  ngOnInit(): void {
  }



}

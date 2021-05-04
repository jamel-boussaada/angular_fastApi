import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
const myCarousel = document.querySelector('#myCarousel');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 images = [];
 allProd = true;
 oneProd = false;
  constructor() { }
  produits: any;
  produit: any;
  async ngOnInit() {
   this.allprod()
  }
  async allprod(){
  const rep = await fetch('http://127.0.0.1:8000/produit');
    if (rep.ok){
      this.allProd = true;
      this.oneProd=false;
      rep.json().then(data => {// raj3etlna objet json data
        this.produits = data; // hatina e data fel variable mteena
        console.log(this.produits);
      });
    }
  }
 // tslint:disable-next-line: typedef
 async  valider(id:number){
  // tslint:disable-next-line: no-angle-bracket-type-assertion
 // var id = (<HTMLInputElement> document.getElementById('id')).value;
 //console.log(id);
  //const body = `{"id":"${id}"}`;
  console.log(id);
  var url='http://127.0.0.1:8000/idprod?id='+(id);
    const rep = await fetch (url);
this.oneProd=true;
this.allProd=false
if (rep.ok){
  rep.json().then(data => {
    this.produit = data;
    console.log(this.produit);
   // alert(JSON.stringify(this.produit))
  });
  }









    }

  }



import { Component, HostBinding, OnInit } from '@angular/core';
import { support } from 'jquery';

@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.css']
})
export class AffichageComponent implements OnInit {

  constructor() { }
  produit: any;

  // tslint:disable-next-line: typedef
   async ngOnInit() {


    const rep = await fetch('http://127.0.0.1:8000/produit');
    if (rep.ok){
      rep.json().then(data => {
        this.produit = data;
        console.log(this.produit);
      });
    }




}

// tslint:disable-next-line: typedef
 async supp( rep1:any){

var ch = {id: rep1.id};

console.log(rep1.id);
const rep2 = await fetch('http://127.0.0.1:8000/supp', {
// tslint:disable-next-line: no-unused-expression
method: 'POST',
// tslint:disable-next-line: object-literal-shorthand
body : JSON.stringify(ch)
});
alert("votre produit a été supprimer avec succeés");
window.location.reload();
}


async modif( rep3:any): Promise<void>{

    // tslint:disable-next-line: no-angle-bracket-type-assertion
    var nom = (<HTMLInputElement> document.getElementById(rep3.nom)).value;
    // tslint:disable-next-line: no-angle-bracket-type-assertion
    var image = (<HTMLInputElement> document.getElementById(rep3.image)).value;
    // tslint:disable-next-line: no-angle-bracket-type-assertion
    var prix = (<HTMLInputElement> document.getElementById(rep3.prix)).value;
    // tslint:disable-next-line: no-angle-bracket-type-assertion
    var typpe = (<HTMLInputElement> document.getElementById(rep3.typpe)).value;
    // tslint:disable-next-line: no-angle-bracket-type-assertion
    var discription = (<HTMLInputElement> document.getElementById(rep3.discription)).value;

    var body = `{"nom":"${nom}" , "image":"${image}" , "prix":"${prix}" , "typpe":"${typpe}" , "discription":"${discription}"}`;

    console.log(body);

    const rep4 = await fetch( 'http://127.0.0.1:8000/modifier', {
      // tslint:disable-next-line: no-unused-expression
      method: 'POST',
      // tslint:disable-next-line: object-literal-shorthand
      body : body
      });

alert(rep4);
  window.location.reload();
  }
}












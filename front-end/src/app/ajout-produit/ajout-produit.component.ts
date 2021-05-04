import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.css']
})
export class AjoutProduitComponent implements OnInit {
  url!: string;
  // tslint:disable-next-line: typedef

  constructor() {
  }
  // tslint:disable-next-line: typedef

  async add() {

    // tslint:disable-next-line: no-angle-bracket-type-assertion
    var nom = (<HTMLInputElement> document.getElementById('name')).value;
    // tslint:disable-next-line: no-angle-bracket-type-assertion
    var image = (<HTMLInputElement> document.getElementById('im')).value;
    // tslint:disable-next-line: no-angle-bracket-type-assertion
    var prix = (<HTMLInputElement> document.getElementById('prix')).value;
    // tslint:disable-next-line: no-angle-bracket-type-assertion
    var typpe = (<HTMLInputElement> document.getElementById('type')).value;
    // tslint:disable-next-line: no-angle-bracket-type-assertion
    var discription = (<HTMLInputElement> document.getElementById('disc')).value;

    var body = `{"nom":"${nom}" , "image":"${this.url}" , "prix":"${prix}" , "typpe":"${typpe}" , "discription":"${discription}"}`;

    console.log(body);
   // body = JSON.stringify(body);

    const rep = await fetch ('http://127.0.0.1:8000/ajouterproduit', {
      method: 'POST',

      // tslint:disable-next-line: object-literal-shorthand
      body : body
    });

    if (rep.ok){
      rep.json().then((data) => {
        console.log(data);
      });
    }
  }


   // tslint:disable-next-line: typedef
   ngOnInit() {
   }




  // tslint:disable-next-line: typedef
  onSelectFile(event: any){
    console.log('here');
    if (event.target.files && event.target.files[0]){
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = async (data) => {
        this.url = data.target?.result as string;
      };
    }
  }
}

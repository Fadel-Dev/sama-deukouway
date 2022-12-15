import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router, RouterLink } from '@angular/router';
import { Observable,  } from 'rxjs';


@Component({
  selector: 'app-publish-house',
  templateUrl: './publish-house.page.html',
  styleUrls: ['./publish-house.page.scss'],
})
export class PublishHousePage implements OnInit {
  items:Observable<any[]>;
  type_habitat:string;
  loc_vente:string;
  lieu:string;
  description:String;
  prix:Number;
  telephone:Number;

  optionChange() {
    alert(this.type_habitat)
  }
 

  
  constructor(
    public firestore:AngularFirestore

  ) { 
  
  }



  addData () {
if (this.prix==undefined || this.lieu==undefined) {
  console.log("le prix est null")
}


    this.firestore.collection('house').add({
      lieu:this.lieu,
      description:this.description,
      prix:this.prix,
      loc_vente:this.loc_vente,
      type_habitat:this.type_habitat,
      telephone:this.telephone
     
          }) 
          console.log("donnees transmises avec suboardccess");
    

          
   }
   
 

  ngOnInit() {
  }

}

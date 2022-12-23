import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';
import { Observable,  } from 'rxjs';




@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  public cool:string="fadel";

  items:Observable<any[]>
  constructor(
    public firestore:AngularFirestore,
    public router:Router,
    public afDB: AngularFireDatabase,
    public afSG: AngularFireStorage

  )  { 
   this.items= this.firestore.collection('house').valueChanges();
  } 
  // RECUPE IMAGE

   getImagesDatabase() {
  
  this.afDB.list('Images').snapshotChanges(['child_added']).subscribe(images => {
    images.forEach(image => {
      console.log('Image: ' + image.payload.exportVal().name);
    });
  });
}

getImagesStorage() {
  // pour récupérer l'URL des images
  // pour récupérer les informations des images
  this.afDB.list('Images').snapshotChanges(['child_added']).subscribe(images => {
    console.log(images);
  });
  
}
 passName(){
  
    this.router.navigate(['/description',this.cool])
 }


  ngOnInit() {
  }


}

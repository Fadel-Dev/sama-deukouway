import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
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
    public router:Router

  ) { 
   this.items= this.firestore.collection('house').valueChanges();
  } 
 passName(){
  
    this.router.navigate(['/description',this.cool])
 }


  ngOnInit() {
  }


}

import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable,  } from 'rxjs';



@Component({
  selector: 'app-publish-house',
  templateUrl: './publish-house.page.html',
  styleUrls: ['./publish-house.page.scss'],
})
export class PublishHousePage implements OnInit {
  items:Observable<any[]>
  constructor(
    public firestore:AngularFirestore

  ) { 
   this.items= this.firestore.collection('house').valueChanges();
  }

  ngOnInit() {
  }

}

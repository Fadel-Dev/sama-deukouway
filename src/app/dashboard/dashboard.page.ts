import { Component, OnInit } from '@angular/core';
import { getAuth } from "firebase/auth";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


// having the name





@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  auth = getAuth();
  user = this.auth.currentUser;
  items:Observable<any[]>;
  cool:any;
  
  constructor(
    public firestore:AngularFirestore
  ) { if (this.user !== null) {
    // The user object has basic properties such as display name, email, etc.
    const displayName = this.auth.currentUser.displayName;
    const email = this.user.email;
    const photoURL = this.user.photoURL;
    const emailVerified = this.user.emailVerified;
    const name = this.auth.currentUser.displayName;
   
    console.log(this.auth.currentUser);
    console.log(name);

  
    const uid = this.user.uid;
    
  }
// 
this.cool= this.auth.currentUser;

}
  
  ngOnInit() {
  }

}

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class FireserviceService {

  constructor(
    public firestore:AngularFirestore,
    public auth: AngularFireAuth
  ) { }

  signup(data) 
  {
    return this.auth.createUserWithEmailAndPassword(data.email,data.password)
  }

  loginWihEmail(data) 
  {
    return this.auth.signInWithEmailAndPassword(data.email,data.password)
  }

  saveDetails(data)
  {
    return this.firestore.collection("users").doc(data.ui).set(data);
  }
  getDetails(data) {
    return this.firestore.collection("users").doc(data.uid).valueChanges();
  }
}

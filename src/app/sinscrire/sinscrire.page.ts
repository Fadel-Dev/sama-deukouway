import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FireserviceService } from '../fireservice.service';


@Component({
  selector: 'app-sinscrire',
  templateUrl: './sinscrire.page.html',
  styleUrls: ['./sinscrire.page.scss'],
})
export class SinscrirePage implements OnInit {
  public email:any;
  public password:any;
   public name:any;
   public adresse:any;
   public telephone:number;
  constructor( 
        public router:Router,
    public fireService:FireserviceService
    ) { }

  ngOnInit() {
  }
  signup(){ 
    this.fireService.signup({email:this.email,password:this.password}).then(res=>{
      if(res.user.uid){
        let data = {
          email:this.email,
          password:this.password,
           name:this.name,
           adresse:this.adresse,
           telephone:this.telephone,
          uid:res.user.uid
        }
        this.fireService.saveDetails(data).then(res=>{
         alert('Account Created!');
         this.router.navigateByUrl('/dashboard');
        },err=>{
          console.log(err);
        })
      }
    },err=>{
      alert(err.message);

      console.log(err);
    })
  }

}
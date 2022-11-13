import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FireserviceService } from '../fireservice.service';

@Component({
  selector: 'app-se-connecter',
  templateUrl: './se-connecter.page.html',
  styleUrls: ['./se-connecter.page.scss'],
})
export class SeConnecterPage implements OnInit {
  public email:any;
  public password:any;


  constructor(
    public router:Router,
    public fireService:FireserviceService
  ) { }

  ngOnInit() {
  }

  login(){
    this.fireService.loginWihEmail({email:this.email,password:this.password}).then(res=>{
      console.log(res);
      if(res.user.uid){
        this.fireService.getDetails({uid:res.user.uid}).subscribe(res=>{
          console.log(res);
        //  alert('Welcome '+ res['name'] + res['id']);
          this.router.navigateByUrl('/dashboard');
        
        },err=>{
          console.log(err);
        });
      }
    },err=>{
      alert(err.message)
      console.log(err);
    })
  }


  signup(){
    this.router.navigateByUrl('sinscrire');
   }

}

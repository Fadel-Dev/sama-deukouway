import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-description',
  templateUrl: './description.page.html',
  styleUrls: ['./description.page.scss'],
})
export class DescriptionPage implements OnInit {

  public type_habitat:string;
  public loc_vente:string;
  public lieu:string;
  public description:string;
  public prix:Number;
  public telephone:Number

  constructor(
      public activeRoute:ActivatedRoute,
  ) { 
        this.type_habitat=this.activeRoute.snapshot.paramMap.get('type_habitat');
        console.log("the name is : " + this.type_habitat)
  }

  ngOnInit() {
  }

}

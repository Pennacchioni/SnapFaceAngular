import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  lien!: string

  constructor(private router : Router){}

  ngOnInit(){
    this.lien = 'facesnap'; 
  }
  OnClickLink(): void{
    this.router.navigateByUrl(this.lien);
  }
}

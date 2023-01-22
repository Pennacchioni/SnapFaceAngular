import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})

export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;
  
  constructor(
    private faceSnapServ : FaceSnapsService, 
    private router : Router)
  {}

  lien!: string

  ngOnInit(){
    this.lien = 'facesnap/' + this.faceSnap.id; //${this.faceSnap.id}'
  }
 
  OnClickLink(){
    this.router.navigateByUrl(this.lien);
  }

}

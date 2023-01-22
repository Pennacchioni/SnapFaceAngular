import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent {
  constructor(private faceSnapServ : FaceSnapsService, private route: ActivatedRoute){}

  faceSnap! : FaceSnap;
  snapsTxt! : string;
  satut! : boolean; 

  ngOnInit(){
    this.snapsTxt = 'no like';
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapServ.getFaceSnapById(faceSnapId);
  }
 
  OnClickSnaps(){

    if(this.faceSnap.statut){
      this.faceSnapServ.getFaceSnap(this.faceSnap.id ,this.faceSnap.statut)
      this.snapsTxt = 'like';
    }
    else{
      this.faceSnapServ.getFaceSnap(this.faceSnap.id, this.faceSnap.statut)
      this.snapsTxt = 'no like';
    }
  }
}

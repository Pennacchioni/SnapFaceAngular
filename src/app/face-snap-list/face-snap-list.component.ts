import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';


@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  ListFaceSnaps! : FaceSnap[]

  constructor(private faceSnapServ: FaceSnapsService){ }

  ngOnInit() {
    this.ListFaceSnaps = this.faceSnapServ.getAllFaceSnaps();
  }
  
  
  // ngOnInit() {
  //   this.ListFaceSnaps =[
  //     {
  //             title : 'CouCou',
  //             description:'ceci et et salue',
  //             urlimg : 'https://media.licdn.com/dms/image/C4E03AQGLYG8Wrgf6kA/profile-displayphoto-shrink_200_200/0/1621436632405?e=1679529600&v=beta&t=eYSI4pzLoyK2DYVg24H3Jx6b_L_AulHR0wNJ-Y7b4Tc',
  //             createdDate : new Date(),
  //             snaps: 455523645.3694,
  //             location: 'Nice',
  //     },
  //     {
  //             title : 'CouCou',
  //             description:'ceci et et salue',
  //             urlimg : 'https://media.licdn.com/dms/image/C4E03AQGLYG8Wrgf6kA/profile-displayphoto-shrink_200_200/0/1621436632405?e=1679529600&v=beta&t=eYSI4pzLoyK2DYVg24H3Jx6b_L_AulHR0wNJ-Y7b4Tc',
  //             createdDate : new Date(),
  //             snaps: 0.466,
  //             location: 'Plage',
  //     },
  //     {
  //             title : 'CouCou',
  //             description:'ceci et et salue',
  //             urlimg : 'https://media.licdn.com/dms/image/C4E03AQGLYG8Wrgf6kA/profile-displayphoto-shrink_200_200/0/1621436632405?e=1679529600&v=beta&t=eYSI4pzLoyK2DYVg24H3Jx6b_L_AulHR0wNJ-Y7b4Tc',
  //             createdDate : new Date(),
  //             snaps: 10,
  //     }
  //   ];
  // }
  
}

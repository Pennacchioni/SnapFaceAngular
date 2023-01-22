import { Component , OnInit} from '@angular/core';
// import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // ListFaceSnaps! : FaceSnap[];  
  // mySnap! : FaceSnap; 
  // mySnapBis! : FaceSnap; 
  // mySnapbisBis! : FaceSnap; 
  ngOnInit(){ 
  }

  //instancienr les valeur de la class
  // ngOnInit(){
  //   this.mySnap = {
  //       title : 'CouCou',
  //       description:'ceci et et salue',
  //       urlimg : 'https://media.licdn.com/dms/image/C4E03AQGLYG8Wrgf6kA/profile-displayphoto-shrink_200_200/0/1621436632405?e=1679529600&v=beta&t=eYSI4pzLoyK2DYVg24H3Jx6b_L_AulHR0wNJ-Y7b4Tc',
  //       createdDate : new Date(),
  //       snaps: 0,
  //       location: 'Nice',
  //   }

  //   this.mySnapBis = {
  //     title : 'CouCou',
  //     description:'ceci et et salue',
  //     urlimg : 'https://media.licdn.com/dms/image/C4E03AQGLYG8Wrgf6kA/profile-displayphoto-shrink_200_200/0/1621436632405?e=1679529600&v=beta&t=eYSI4pzLoyK2DYVg24H3Jx6b_L_AulHR0wNJ-Y7b4Tc',
  //     createdDate : new Date(),
  //     snaps: 0,
  //     location: 'Plage',
  //   }

  //   this.mySnapbisBis = {
  //     title : 'CouCou',
  //     description:'ceci et et salue',
  //     urlimg : 'https://media.licdn.com/dms/image/C4E03AQGLYG8Wrgf6kA/profile-displayphoto-shrink_200_200/0/1621436632405?e=1679529600&v=beta&t=eYSI4pzLoyK2DYVg24H3Jx6b_L_AulHR0wNJ-Y7b4Tc',
  //     createdDate : new Date(),
  //     snaps: 0,
  //     }

  // }

  //Instansienr le constructor
  // ngOnInit(){
  //   this.mySnap = new FaceSnap(
  //     'CouCou',
  //     "ceci et et salue",
  //     new Date(),
  //     6,
  //     'https://media.licdn.com/dms/image/C4E03AQGLYG8Wrgf6kA/profile-displayphoto-shrink_200_200/0/1621436632405?e=1679529600&v=beta&t=eYSI4pzLoyK2DYVg24H3Jx6b_L_AulHR0wNJ-Y7b4Tc'
  //   )
  // }

}



import {Injectable} from '@angular/core'
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
    providedIn:'root'
})

export class FaceSnapsService{

    ListFaceSnaps : FaceSnap[] = [
        {
            id : 1,
            title : 'CouCou',
            description:'ceci et et salue',
            urlimg : 'https://media.licdn.com/dms/image/C4E03AQGLYG8Wrgf6kA/profile-displayphoto-shrink_200_200/0/1621436632405?e=1679529600&v=beta&t=eYSI4pzLoyK2DYVg24H3Jx6b_L_AulHR0wNJ-Y7b4Tc',
            createdDate : new Date(),
            snaps: 455523645.3694,
            statut : true,
            location: 'Nice',
            
        },
        {
            id : 2,
            title : 'LouLou',
            description:'ceci et et salue',
            urlimg : 'https://media.licdn.com/dms/image/C4E03AQGLYG8Wrgf6kA/profile-displayphoto-shrink_200_200/0/1621436632405?e=1679529600&v=beta&t=eYSI4pzLoyK2DYVg24H3Jx6b_L_AulHR0wNJ-Y7b4Tc',
            createdDate : new Date(),
            snaps: 0.466,
            statut : true,
            location: 'Plage',
        },
        {
              
            id : 3,
            title : 'DouDou',
            description:'ceci et et salue',
            urlimg : 'https://media.licdn.com/dms/image/C4E03AQGLYG8Wrgf6kA/profile-displayphoto-shrink_200_200/0/1621436632405?e=1679529600&v=beta&t=eYSI4pzLoyK2DYVg24H3Jx6b_L_AulHR0wNJ-Y7b4Tc',
            createdDate : new Date(),
            snaps: 10,
            statut : true,
        }
      ];

      getAllFaceSnaps(): FaceSnap[]{
        return this.ListFaceSnaps;
      }

      getFaceSnapById(id : number): FaceSnap{
        const faceSnap = this.ListFaceSnaps.find(faceSnap => faceSnap.id === id)
        if(!faceSnap){
            throw new Error('FaceSnap not found!');        
        }
        else{
            return faceSnap;
        }
      }

      getFaceSnap(id: number , satut: boolean): void{ 
        const fs =  this.getFaceSnapById(id);
        if(satut)
        {
            fs.snaps++;
            fs.statut = false;
        }else{
            fs.snaps--;
            fs.statut = true;
        }
      }



}

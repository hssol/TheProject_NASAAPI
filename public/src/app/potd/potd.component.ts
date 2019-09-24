import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-potd',
  templateUrl: './potd.component.html',
  styleUrls: ['./potd.component.css']
})
export class PotdComponent implements OnInit {

  constructor(private _http:HttpService) { }
  ApiPic: any;
  ApiTitle: any;
  ApiDate: any;
  ApiExplanation: any;
  errorsPresent: Boolean;
  errors: any;

  ngOnInit() {
    this.getData();
  }
  getData(){
    let Observable = this._http.getDataFromAPI('https://api.nasa.gov/planetary/apod?api_key=ycDdhDNaHy8KtCytkV5s1mgL9eZA7E3Wp8zEdSAt');
    Observable.subscribe(data=>{
      console.log('POTD Successfully pinged', data);
      if(data['message'] == 'error'){
        this.errorsPresent = true;
        this.errors = data['data'];
      }
      else{
        this.errorsPresent = false;
        this.ApiPic = data['hdurl'];
        this.ApiTitle = data['title'];
        this.ApiDate = data['date'];
        this.ApiExplanation = data['explanation'];
      }
      
    })
  }
}

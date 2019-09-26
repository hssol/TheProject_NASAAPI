import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(
    private _httpService: HttpService,   
    private _route: ActivatedRoute,
    private _router: Router
  ) { }
    Sol1 :any;
    Low_mn1 :any;
    Max_mx1 : any;
    Last_UTC1 :any;

    Sol2 : any;
    Low_mn2 :any;
    Max_mx2 : any;
    Last_UTC2 :any;

    Sol3 : any;
    Low_mn3 :any;
    Max_mx3 : any;
    Last_UTC3 :any;

    Sol4 : any;
    Low_mn4 :any;
    Max_mx4 : any;
    Last_UTC4 :any;

    Sol5 : any;
    Low_mn5 :any;
    Max_mx5 : any;
    Last_UTC5 :any;

    Sol6 : any;
    Low_mn6 :any;
    Max_mx6 : any;
    Last_UTC6 :any;

    Sol7 : any;
    Low_mn7 :any;
    Max_mx7 : any;
    Last_UTC7 :any;

  ngOnInit() {
    let obserable = this._httpService.getDataFromAPI("https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0")
    obserable.subscribe(data =>{
      this.Sol1 = data["sol_keys"][0]
      console.log(data);
      this.Low_mn1 = data[this.Sol1]["AT"]["mn"].toFixed(2)
      console.log("Here is lowest temp:",this.Low_mn1);
      this.Max_mx1 = data[this.Sol1]["AT"]["mx"].toFixed(2)
      console.log("Here is Max temp", this.Max_mx1);

     
      this.Last_UTC1 = data[this.Sol1]["Last_UTC"]
      console.log("Latest update Data", this.Last_UTC1);

      
      this.Sol2 = data["sol_keys"][1]
      console.log(data);
      this.Low_mn2 = data[this.Sol2]["AT"]["mn"].toFixed(2)
      console.log("Here is lowest temp day2", this.Low_mn2);
      this.Max_mx2 = data[this.Sol2]["AT"]["mx"].toFixed(2)
      console.log("Here is Max temp", this.Max_mx2);
      this.Last_UTC2 = data[this.Sol2]["Last_UTC"]
      console.log("Latest update Data", this.Last_UTC2);
      
      this.Sol3 = data["sol_keys"][2]
      console.log(data);
      this.Low_mn3 = data[this.Sol3]["AT"]["mn"].toFixed(2)
      console.log("Here is lowest temp day3", this.Low_mn3);
      this.Max_mx3 = data[this.Sol3]["AT"]["mx"].toFixed(2)
      console.log("Here is Max temp", this.Max_mx3);
      this.Last_UTC3 = data[this.Sol3]["Last_UTC"]
      console.log("Latest update Data", this.Last_UTC3);

      this.Sol4 = data["sol_keys"][3]
      console.log(data);
      this.Low_mn4 = data[this.Sol4]["AT"]["mn"].toFixed(2)
      console.log("Here is lowest temp day4", this.Low_mn4);
      this.Max_mx4 = data[this.Sol4]["AT"]["mx"].toFixed(2)
      console.log("Here is Max temp", this.Max_mx4);
      this.Last_UTC4 = data[this.Sol4]["Last_UTC"]
      console.log("Latest update Data", this.Last_UTC4);

      this.Sol5 = data["sol_keys"][4]
      console.log(data);
      this.Low_mn5 = data[this.Sol5]["AT"]["mn"].toFixed(2)
      console.log("Here is lowest temp day5", this.Low_mn4);
      this.Max_mx5 = data[this.Sol5]["AT"]["mx"].toFixed(2)
      console.log("Here is Max temp", this.Max_mx5);
      this.Last_UTC5 = data[this.Sol5]["Last_UTC"]
      console.log("Latest update Data", this.Last_UTC5);

      this.Sol6 = data["sol_keys"][5]
      console.log(data);
      this.Low_mn6 = data[this.Sol6]["AT"]["mn"].toFixed(2)
      console.log("Here is lowest temp day6", this.Low_mn6);
      this.Max_mx6 = data[this.Sol6]["AT"]["mx"].toFixed(2)
      console.log("Here is Max temp", this.Max_mx6);
      this.Last_UTC6 = data[this.Sol6]["Last_UTC"]
      console.log("Latest update Data", this.Last_UTC6);
      
      this.Sol7 = data["sol_keys"][6]
      console.log(data);
      this.Low_mn7 = data[this.Sol7]["AT"]["mn"].toFixed(2)
      console.log("Here is lowest temp day7", this.Low_mn7);
      this.Max_mx7 = data[this.Sol7]["AT"]["mx"].toFixed(2)
      console.log("Here is Max temp", this.Max_mx7);
      this.Last_UTC7 = data[this.Sol7]["Last_UTC"]
      console.log("Latest update Data", this.Last_UTC7);
      


      



    })
  }

}

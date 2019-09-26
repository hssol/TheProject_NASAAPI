import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import anime from 'animejs/lib/anime.es.js'
// var anime = require('@types/animejs/index')

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this.firsttwentyprojects = []

    this.getallproejectids()

    // this.block = anime({
    //   targets:".test3",
    //   translateX: 240,
    //   rotate: '1turn',
    //   backgroundColor: '#808080',
    //   borderRadius: ['0%', '50%'],
    //   duration: 800,
      
    //   easing: "easeInOutQuad"
    // })

    this.block2 = anime({
      targets: ".test2",
      points: [
        { value: [
          '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369',
          '70 41 118.574 59.369 111.145 132.631 60.855 84.631 20.426 60.369']
        },
        { value: '70 6 119.574 60.369 100.145 117.631 39.855 117.631 55.426 68.369' },
        { value: '70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369' },
        { value: '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369' }
      ],
      easing: 'easeOutQuad',
      duration: 2000,
      loop: true
    });
    
    
  }



  block:any;
  block2:any;

  dostuff(){
    this.block = anime({
      targets:".test3",
      translateX: 300,
      direction:'alternate',
      rotate: '1turn',
      backgroundColor: '#808080',
      borderRadius: ['0%', '50%'],
      duration: 8000,
      easing: "easeOutSine"
    })

  }


  array:any;
  project:any
  firsttwentyids:[];
  firsttwentyprojects:any;

  apikey = "?api_key=usCAWxRDAff65tYhiqlMxtbZY6sbp8hcJta6KE9v";

  getallproejectids(){
    let obv = this._http.getDataFromAPI("https://api.nasa.gov/techport/api/projects" + this.apikey);
    obv.subscribe(data => {
      console.log(data)
      this.firsttwentyids = data['projects']['projects'].splice(0,20)

      console.log("type of data for firstwentyids >>>" + typeof(this.firsttwentyids))
      console.log (this.firsttwentyids)

      this.getprojects(this.firsttwentyids)
      
      console.log(this.firsttwentyprojects)
    })
  }

  getprojects(array){
    for (var i = 0; i < 20; i++){
      let obv = this._http.getDataFromAPI("https://api.nasa.gov/techport/api/projects/" + array[i].id + this.apikey)
      obv.subscribe(data =>{
        this.project = data['project']
        console.log("single project >>>>>" + this.project)
        this.firsttwentyprojects.push(this.project)
      })
    }
  }


}

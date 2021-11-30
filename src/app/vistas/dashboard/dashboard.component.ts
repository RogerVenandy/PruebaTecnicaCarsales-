import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';
import { Router, RouteReuseStrategy } from '@angular/router';
import { episodiosI }  from "../../modelos/episodios.interface";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  
  episodios: episodiosI[];

  constructor(private api:ApiService, private router: Router) { }
  
  ngOnInit(): void {

    
      this.api.getEpisodios(1).subscribe(data =>{
      this.episodios = data;
      console.log(this.episodios);
    })
  }
  
}

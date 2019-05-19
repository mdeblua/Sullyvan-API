import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaceSource } from 'webpack-sources';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  eventos: any;

  // = [
  //   {
  //     EventoId: 1,
  //     Tema: 'Angular',
  //     Local: 'Houston, TX'
  //   },
  //   {
  //     EventoId: 2,
  //     Tema: 'Netcore',
  //     Local: 'Belo Horizonte, BR'
  //   },
  //   {
  //     EventoId: 3,
  //     Tema: 'NestJS',
  //     Local: 'Atlanta, GE'
  //   }

  // ];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getEventos();
  }

  getEventos() {
    this.http.get('http://localhost:5000/api/values').subscribe( response => {
      this.eventos = response;
        }, error => {
          console.log(error);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Despesa, Senador, SenadoresService  } from './../senadores.service';

@Component({
  selector: 'app-lista-senadores',
  templateUrl: './lista-senadores.component.html',
  styleUrls: ['./lista-senadores.component.css']
})
export class ListaSenadoresComponent implements OnInit {

  senadores: Senador[] = [];
  constructor(private senadoresService: SenadoresService) {}

  ngOnInit(): void {
    this.senadoresService.listSenadores().subscribe(senadores => {
      this.senadores = senadores;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {SenadoresService, Senador, Despesa} from './../senadores.service';


@Component({
  selector: 'app-despesas-senadores',
  templateUrl: './despesas-senadores.component.html',
  styleUrls: ['./despesas-senadores.component.css']
})
export class DespesasSenadoresComponent implements OnInit {

  id: number;
  senador: Senador;
  nome: string;

  constructor(private senadoresService: SenadoresService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.id = parseInt(paramMap.get('id'));
      this.senadoresService.retrieveDespesas(this.id).subscribe(senador => {
        this.senador = senador;  
      });
    });
  }

  filtroPorDespesas(despesas: Despesa[], tipo: number){
    return despesas.filter(function(despesa) {
      return despesa.tipo == tipo;
    });
  }

  calculateTotalDespesas(despesas: Despesa[], tipo: number) {

    const despesasFiltradas = this.filtroPorDespesas(despesas, tipo);
    return despesasFiltradas.reduce(function (acc, curr) {
        return acc + curr.valor;
    },0);
  }



}

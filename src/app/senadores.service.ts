import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Senador {
    id: number,
    nomeSenador: string
    despesas: Despesa[]
}

export interface Despesa {
    tipo: number,
    fornec: string,
    ano: number,
    mes: number,
    dia: number,
    valor:number
}

const urlBase = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class SenadoresService {

  constructor(private http: HttpClient) { }

  listSenadores() {
    return this.http.get<Senador[]>(`${urlBase}/senadores?_sort=name`);
  }

  retrieveDespesas(id: number) {
    return this.http.get<Senador>(`${urlBase}/despesasSenadores/${id}`);
  }
}

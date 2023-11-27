export default class Voo{
    id: number | null;
    origem: String;
    destino: String;
    partida : Date;
    embarque: Date;
    chegada: Date;
    nAssentos: number;
    assentosDisp: String;

    constructor(id: number | null, origem: String, destino: String,
               partida : Date, embarque: Date, chegada: Date,
               nAssentos: number, assentosDisp: String){

       this.id = id;
       this.origem = origem;
       this.destino = destino;
       this.partida = partida;
       this.embarque = embarque;
       this.chegada = chegada;
       this.nAssentos = nAssentos;
       this.assentosDisp = assentosDisp;

    }
}
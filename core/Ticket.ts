export default class Ticket{
    id: number | null;
    valor: number;
    assento: String;
    vooID: number;
    usuarioID: number;

    constructor(id: number | null,
                valor: number,
                assento: String,
                vooID: number,
                usuarioID: number){
        this.id = id;
        this.valor = valor;
        this.assento = assento;
        this.vooID = vooID;
        this.usuarioID = usuarioID;
    }
}
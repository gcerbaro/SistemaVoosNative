export default class Cidade{
    id: number | null;
    nome : String;
    latitude : number;
    longitude : number;

    constructor(id: number | null,
                nome : String,
                latitude : number,
                longitude : number){
        
        this.id = id;
        this.nome = nome;
        this.latitude = latitude;
        this.longitude = longitude;

    }
}
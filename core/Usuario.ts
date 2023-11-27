export default class Usuario{
    id : number | null;
    nome: String;
    senha: String;
    role:String;
    cidade:String;
    email:String;

    constructor(id : number | null, nome: String, senha: String, role:String, cidade:String, email:String){
        this.id = id;
        this.nome = nome;
        this.senha = senha;
        this.role = role;
        this.cidade = cidade;
        this.email = email;
    }
}
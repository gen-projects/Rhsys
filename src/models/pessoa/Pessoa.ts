import Cargo from "../cargo/cargo";

export default interface Pessoa {
  id: number;
  nome: string;
  cpf: string;
  endereco: string;
  dataNascimento: string;
  dataAdmissao: string;
  cargo: Cargo;
}

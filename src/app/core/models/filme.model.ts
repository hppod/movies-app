import { Diretor } from "./diretor.model"

export interface Filme {
    _id: String,
    nome: String,
    genero: String,
    classificacaoIndicativa?: String,
    dataLancamento?: Date,
    duracao?: String,
    imagem: String,
    sinopse: String,
    diretor: Diretor
}
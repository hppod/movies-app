import { Filme } from "./filme.model"

export interface Diretor {
    _id: String
    nome: String
    biografia?: String
    imagem?: String
    filmes?: Filme[] 
}
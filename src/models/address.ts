// Baseado no modelo https://viacep.com.br/ws/01001000/json/

export interface Addres {
    cep: string;
    logradouro: string;
    complemento?: string;
    bairro: string;
    localidade: string;
    uf: string;
}
// Baseado no modelo https://viacep.com.br/ws/01001000/json/

export interface EnderecoApi {
  cep: string;
  logradouro: string;
  complemento?: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export interface Address {
  name: string;
  cep: string;
  address: string;
  number: string;
  complement: string;
  reference: string;
  neighbourhood: string;
  city: string;
  state: string;
}

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
  cep: string; // shippingAddressPostalCode
  address: string; // shippingAddressStreet
  number: string; // shippingAddressNumber
  complement: string; // shippingAddressComplement
  neighbourhood: string; // shippingAddressDistrict
  city: string; // shippingAddressCity
  state: string; // shippingAddressState
}

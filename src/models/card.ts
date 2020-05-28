export interface PagSeguroCard {
  holderName: string;
  holderCPF: string;
  holderBirthDate: string; // DD/MM/YYYY
  holderAreaCode: string;
  holderPhone: string;

  addressStreet: string;
  addressNumber: number;
  addressComplement: string;
  addressDistrict: string;
  addressPostalCode: string;
  addressCity: string;
  addressState: string;
}

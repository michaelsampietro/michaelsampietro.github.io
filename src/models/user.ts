export interface User {
    id?: number;
    email: string;
    password: string;
    name: string;
    birth: number | Date;
    sex: 'masculino' | 'feminino';
    phone: string;
    whatsappAlerts: boolean;
    emailAlerts: boolean;
}
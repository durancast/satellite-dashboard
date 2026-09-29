export interface Satellite {
    id : number;
    nombre : string;
    categoria : string;
    estado : 'operativo' | 'advertencia' | 'critico' | 'sinSenal';

}
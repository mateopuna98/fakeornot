import {Commentario} from './comentarios';
import {votosUsuario} from './votos'
export interface Task
{
   
 id?: string;
    Titulo?: string;
    Cuerpo?: string;
    cod_imagen?: string;
    descripcion?: string;
    votos?: votosUsuario[];
    veracidad?: boolean;
    comentario?: Commentario[];
    votosPosTotal?: number;
    votosNegTotal?: number;


}



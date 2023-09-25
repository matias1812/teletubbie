export interface CardInfo {
  img: (event: React.MouseEvent<HTMLInputElement>) => void;
  titulo: string;
  precio: number;
  ubicacion: string;
  prestaciones: any[];
  ingreso?: string; // Cambiando undefined a string si ingreso y salida son fechas
  salida?: string;
  tipoVivienda: string;
  limite: number;
  descripcion: string;
  mascotas: boolean;
}

export interface PostCardProps {
  post: CardInfo;
}

export type StateValues = {
  slidePrev: () => void;
  slideNext: () => void;
};


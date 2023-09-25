export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      benefits: {
        Row: {
          benefit: string | null
          id: string
        }
        Insert: {
          benefit?: string | null
          id?: string
        }
        Update: {
          benefit?: string | null
          id?: string
        }
        Relationships: []
      }
      mis_reservaciones: {
        Row: {
          fecha_compra: string | null
          fecha_final: string | null
          fecha_inicio: string | null
          huespedes: string | null
          id: string
          publicacion_id: string | null
          user_id: string
        }
        Insert: {
          fecha_compra?: string | null
          fecha_final?: string | null
          fecha_inicio?: string | null
          huespedes?: string | null
          id?: string
          publicacion_id?: string | null
          user_id: string
        }
        Update: {
          fecha_compra?: string | null
          fecha_final?: string | null
          fecha_inicio?: string | null
          huespedes?: string | null
          id?: string
          publicacion_id?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "mis_reservaciones_publicacion_id_fkey"
            columns: ["publicacion_id"]
            referencedRelation: "publicacion"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mis_reservaciones_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      publicacion: {
        Row: {
          descripcion: string | null
          id: string
          image: string | null
          ingreso: string | null
          limite: number | null
          mascotas: boolean | null
          precio: number | null
          prestaciones: string[] | null
          salida: string | null
          tipoVivienda: string | null
          titulo: string | null
          ubicacion: string | null
          user: string
        }
        Insert: {
          descripcion?: string | null
          id?: string
          image?: string | null
          ingreso?: string | null
          limite?: number | null
          mascotas?: boolean | null
          precio?: number | null
          prestaciones?: string[] | null
          salida?: string | null
          tipoVivienda?: string | null
          titulo?: string | null
          ubicacion?: string | null
          user: string
        }
        Update: {
          descripcion?: string | null
          id?: string
          image?: string | null
          ingreso?: string | null
          limite?: number | null
          mascotas?: boolean | null
          precio?: number | null
          prestaciones?: string[] | null
          salida?: string | null
          tipoVivienda?: string | null
          titulo?: string | null
          ubicacion?: string | null
          user?: string
        }
        Relationships: [
          {
            foreignKeyName: "publicacion_user_fkey"
            columns: ["user"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      tipo_de_vivienda: {
        Row: {
          id: string
          "tipo ": string
        }
        Insert: {
          id?: string
          "tipo ": string
        }
        Update: {
          id?: string
          "tipo "?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

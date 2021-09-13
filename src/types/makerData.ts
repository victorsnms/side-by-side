import { User } from "./userData";

export interface Marker {
  type: string;
    title: string;
    lat: number;
    lng: number;
    start_time: string;
    end_time: string;
    created_at: string;
    address: string;
    contact: string;
    materials_type?: string[];
    description?: string;
    picture_url?: string;
    participants?: User[];
    date?: string;
    id?: number
  }

export interface InputMarker {
  inputMarker: {
    lat: number
    lng: number
    created_at: string
  }[]
}
  
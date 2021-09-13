import { User } from "./userData";

export interface Marker {
    title: string;
    lat: number;
    lng: number;
    start_time: string;
    end_time: string;
    type: string;
    created_at: Date;
    address: string;
    contact: string;
    materials_type?: string[];
    description?: string;
    picture_url?: string;
    participants?: User[];
    date?: string;
    id?: number
  }
  
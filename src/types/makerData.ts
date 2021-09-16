export interface Participants {
  name: string;
  id?: number;
  image_url: string;
  email: string;
}

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
  participants?: Participants[];
  date?: string;
  id?: number;
}

export interface InputMarker {
  inputMarker: {
    lat: number;
    lng: number;
    created_at: string;
  }[];
}

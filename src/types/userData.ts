import { Marker } from "./makerData";

export interface User{
    name: string;
    id?: number;
    image_url: string;
    password: string;
    email: string;
    badges: string[];
    my_events: Marker[];
    experience: number;
    places: Marker[];
  }
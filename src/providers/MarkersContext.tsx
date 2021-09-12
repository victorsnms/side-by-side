//necessita passar para o app provider
import { AxiosResponse } from "axios";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from "react";
import { api } from "../services/api";
import { Marker } from "../types/makerData";

interface MarkersProviderProps {
  children: ReactNode;
}



interface MarkersContextData {
  markers: Marker[];
  createMarker: (data: Marker, accessToken: string) => Promise<void>;
}

const MarkersContext = createContext<MarkersContextData>(
  {} as MarkersContextData
);

const useMarkers = () => {
  const context = useContext(MarkersContext);

  if (!context) {
    throw new Error("useMarkers must be used within an MarkersProvider");
  }
  return context;
};

const MarkersProvider = ({ children }: MarkersProviderProps) => {
  const [markers, setMarkers] = useState<Marker[]>([]);

  const createMarker = useCallback(
    async (data: Marker, accessToken: string) => {
      api
        .post("/markers", data, {
          headers: { Authorization: `Bearer ${accessToken}` },
        })
        .then((response: AxiosResponse<Marker>) =>
          setMarkers((oldMarkers) => [...oldMarkers, response.data])
        )
        .catch((err) => console.log(err));
    },
    []
  );

  return (
    <MarkersContext.Provider value={{ markers, createMarker }}>
      {children}
    </MarkersContext.Provider>
  );
};

export { useMarkers, MarkersProvider };

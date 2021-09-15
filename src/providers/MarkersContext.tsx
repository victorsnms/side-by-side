//necessita passar para o app provider
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
  Dispatch,
} from "react";
import { api } from "../services/api";
import { Marker } from "../types/makerData";

interface MarkersProviderProps {
  children: ReactNode;
}

interface MarkersContextData {
  markers: Marker[];
  setMarkers: Dispatch<React.SetStateAction<Marker[]>>;
  loadMarkers: (accessToken: string) => Promise<void>;
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

  const loadMarkers = useCallback(async (accessToken: string) => {
    try {
      const response = await api.get("/markers", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setMarkers(response.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <MarkersContext.Provider value={{ markers, setMarkers, loadMarkers }}>
      {children}
    </MarkersContext.Provider>
  );
};

export { useMarkers, MarkersProvider };

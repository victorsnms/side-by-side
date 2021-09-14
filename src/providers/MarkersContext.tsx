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
import { User } from "../types/userData";

interface MarkersProviderProps {
  children: ReactNode;
}

interface MarkersContextData {
  markers: Marker[];
  createMarker: (data: Marker, accessToken: string) => Promise<void>;
  loadMarkers: (accessToken: string) => Promise<void>;
  updateMyEvents: (
    id: () => string,
    accessToken: string,
    data: Marker,
    my_events: Marker[]
  ) => void;
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

  const createMarker = useCallback(
    async (data: Marker, accessToken: string) => {
      await api
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

  const updateMyEvents = useCallback(
    (id: () => string, accessToken: string, data, my_events: Marker[]) => {
      const newData = [data, ...my_events];
      api
        .patch(
          `/users/${id}`,
          { my_events: newData },
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        )
        .then((response: AxiosResponse<User>) => console.log(response))
        .catch((err) => console.log(err));
    },
    []
  );

  return (
    <MarkersContext.Provider
      value={{ markers, createMarker, loadMarkers, updateMyEvents }}
    >
      {children}
    </MarkersContext.Provider>
  );
};

export { useMarkers, MarkersProvider };

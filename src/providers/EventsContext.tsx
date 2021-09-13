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

interface EventsProviderProps {
  children: ReactNode;
}

interface Event {
  //definir props
  lat: number;
  lng: number;
  time: Date;
  type: string;
  title: string;
  description?: string;
}

interface EventsContextData {
  events: Event[];
  createEvent: (data: Event, accessToken: string) => Promise<void>;
}

const EventsContext = createContext<EventsContextData>({} as EventsContextData);

const useEvents = () => {
  const context = useContext(EventsContext);

  if (!context) {
    throw new Error("useMarkers must be used within an EventsProvider");
  }
  return context;
};

const EventsProvider = ({ children }: EventsProviderProps) => {
  const [events, setEvents] = useState<Event[]>([]);

  const createEvent = useCallback(async (data: Event, accessToken: string) => {
    api
      .post("/events", data, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((response: AxiosResponse<Event>) =>
        setEvents((oldEvents) => [...oldEvents, response.data])
      )
      .catch((err) => console.log(err));
  }, []);

  return (
    <EventsContext.Provider value={{ events, createEvent }}>
      {children}
    </EventsContext.Provider>
  );
};

export { useEvents, EventsProvider };

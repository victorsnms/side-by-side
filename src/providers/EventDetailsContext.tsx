import { useDisclosure } from "@chakra-ui/react";
import { createContext, useContext, ReactNode } from "react";
import { useState } from "react";
import { Marker } from "../types/makerData";

interface EventDetailsProviderProps {
  children: ReactNode;
}

interface EventDetailsContextData {
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
  selectedEvent: (event: Marker) => void;
  event: Marker;
}

const EventDetailsContext = createContext<EventDetailsContextData>(
  {} as EventDetailsContextData
);

const useEventDetails = () => {
  const context = useContext(EventDetailsContext);
  if (!context) {
    throw new Error("useModal must be used within an ModalProvider");
  }
  return context;
};

const EventDetailsProvider = ({ children }: EventDetailsProviderProps) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [event, setEvent] = useState<Marker>({} as Marker);

  const selectedEvent = (event: Marker) => {
    setEvent(event);
    onOpen();
  };

  return (
    <EventDetailsContext.Provider
      value={{ isOpen, onClose, onOpen, selectedEvent, event }}
    >
      {children}
    </EventDetailsContext.Provider>
  );
};
export { useEventDetails, EventDetailsProvider };

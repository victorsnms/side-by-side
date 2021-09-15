import { useDisclosure } from "@chakra-ui/react";
import { createContext, useContext, ReactNode } from "react";

interface EventDetailsProviderProps {
  children: ReactNode;
}

interface EventDetailsContextData {
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
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

  return (
    <EventDetailsContext.Provider value={{ isOpen, onClose, onOpen }}>
      {children}
    </EventDetailsContext.Provider>
  );
};
export { useEventDetails, EventDetailsProvider };
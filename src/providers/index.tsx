import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import { theme } from "../styles/theme";
import { AuthProvider } from "./AuthContext";
import { MarkersProvider } from "./MarkersContext";
import { ModalProvider } from "./ModalProviders";
import { UserProvider } from "./UserContext";
import { ToggleSwitchProvider } from "./ToggleSwitchContext";
import { EventDetailsProvider } from "./EventDetailsContext";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => (
  <ModalProvider>
    <AuthProvider>
      <MarkersProvider>
        <UserProvider>
          <ToggleSwitchProvider>
            <EventDetailsProvider>
              <ChakraProvider theme={theme}>{children}</ChakraProvider>
            </EventDetailsProvider>
          </ToggleSwitchProvider>
        </UserProvider>
      </MarkersProvider>
    </AuthProvider>
  </ModalProvider>
);

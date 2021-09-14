import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import { theme } from "../styles/theme";
import { AuthProvider } from "./AuthContext";
import { MarkersProvider } from "./MarkersContext";
import { UserProvider } from "./UserContext";
import { ToggleSwitchProvider } from "./ToggleSwitchContext";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => (
  <AuthProvider>
    <MarkersProvider>
      <UserProvider>
        <ToggleSwitchProvider>
          <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </ToggleSwitchProvider>
      </UserProvider>
    </MarkersProvider>
  </AuthProvider>
);

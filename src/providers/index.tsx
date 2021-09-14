import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import { FormProvider } from "./FormContext";
import { theme } from "../styles/theme";
import { AuthProvider } from "./AuthContext";
import { MarkersProvider } from "./MarkersContext";
import { UserProvider } from "./UserContext";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => (
  <AuthProvider>
      <FormProvider>
        <MarkersProvider>
    <UserProvider>
          <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </UserProvider>
        </MarkersProvider>
      </FormProvider>
  </AuthProvider>
);

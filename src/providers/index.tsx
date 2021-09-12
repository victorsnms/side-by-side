import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import { FormProvider } from "./FormContext";
import { theme } from "../styles/theme";
import { AuthProvider } from "./AuthContext";
import { MarkersProvider } from "./MarkersContext";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => (
  <AuthProvider>
    <FormProvider>
      <MarkersProvider>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </MarkersProvider>
    </FormProvider>
  </AuthProvider>
);

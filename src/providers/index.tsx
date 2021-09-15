import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import { FormProvider } from "./FormContext";
import { theme } from "../styles/theme";
import { AuthProvider } from "./AuthContext";
import { MarkersProvider } from "./MarkersContext";
import { ModalProvider } from "./ModalProviders";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => (
        <ModalProvider>
  <AuthProvider>
    <FormProvider>
      <MarkersProvider>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </MarkersProvider>
    </FormProvider>
  </AuthProvider>
        </ModalProvider>
);

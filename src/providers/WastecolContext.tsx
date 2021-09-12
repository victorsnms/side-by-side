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

interface WastecolProviderProps {
  children: ReactNode;
}

interface Wastecol {
  //definir props
  lat: number;
  lng: number;
  time: Date;
  type: string;
  title: string;
  description?: string;
}

interface WastecolContextData {
  wastecol: Wastecol[];
  createWastecol: (data: Wastecol, accessToken: string) => Promise<void>;
}

const WastecolContext = createContext<WastecolContextData>(
  {} as WastecolContextData
);

const useWastecol = () => {
  const context = useContext(WastecolContext);

  if (!context) {
    throw new Error("useMarkers must be used within an WastecolProvider");
  }
  return context;
};

const WastecolProvider = ({ children }: WastecolProviderProps) => {
  const [wastecol, setWastecol] = useState<Wastecol[]>([]);

  const createWastecol = useCallback(
    async (data: Wastecol, accessToken: string) => {
      api
        .post("/Wastecol", data, {
          headers: { Authorization: `Bearer ${accessToken}` },
        })
        .then((response: AxiosResponse<Wastecol>) =>
          setWastecol((oldWastecol) => [...oldWastecol, response.data])
        )
        .catch((err) => console.log(err));
    },
    []
  );

  return (
    <WastecolContext.Provider value={{ wastecol, createWastecol }}>
      {children}
    </WastecolContext.Provider>
  );
};

export { useWastecol, WastecolProvider };

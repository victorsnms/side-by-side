//necessita passar para o app provider
import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

interface LocationProviderProps {
  children: ReactNode;
}

interface Location {
  lat: number;
  lng: number;
}

interface LocationContextData {
  location: Location;
  setLocation: React.Dispatch<React.SetStateAction<Location>>;
}

const LocationContext = createContext<LocationContextData>(
  {} as LocationContextData
);

const useLocation = () => {
  const context = useContext(LocationContext);

  if (!context) {
    throw new Error("useLocation must be used within an LocationProvider");
  }
  return context;
};

const LocationProvider = ({ children }: LocationProviderProps) => {
  const [location, setLocation] = useState<Location>({} as Location);
  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export { useLocation, LocationProvider };

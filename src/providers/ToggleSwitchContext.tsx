import { createContext, useContext, useState, ReactNode } from "react";
import { useEffect } from "react";

interface ToggleSwitchProviderProps {
  children: ReactNode;
}

interface ToggleSwitchData {
  formOption: string;
  setFormOption: React.Dispatch<React.SetStateAction<string>>;
  options: string[];
  setOptions: React.Dispatch<React.SetStateAction<string[]>>;
  isLeft: boolean;
  setIsLeft: React.Dispatch<React.SetStateAction<boolean>>;
  position: string;
  setPosition: React.Dispatch<React.SetStateAction<string>>;
  handleMovement: () => void;
}

const ToggleSwitchContext = createContext<ToggleSwitchData>(
  {} as ToggleSwitchData
);

export const ToggleSwitchProvider = ({
  children,
}: ToggleSwitchProviderProps) => {
  const [options, setOptions] = useState<string[]>([]);
  const [formOption, setFormOption] = useState<string>(options[0]);
  const [isLeft, setIsLeft] = useState<boolean>(
    formOption === options[0] ? true : false
  );
  const [position, setPosition] = useState<string>("");

  useEffect(() => {
    if (formOption === options[0]) {
      setIsLeft(true);
      setPosition("-2%");
    } else {
      setIsLeft(false);
      setPosition("46%");
    }
  }, [formOption, options]);

  const handleMovement = () => {
    if (formOption === options[0]) {
      setFormOption(options[1]);
      setIsLeft(false);
      setPosition("46%");
    } else {
      setFormOption(options[0]);
      setIsLeft(true);
      setPosition("-2%");
    }
  };

  return (
    <ToggleSwitchContext.Provider
      value={{
        formOption,
        setFormOption,
        options,
        setOptions,
        isLeft,
        setIsLeft,
        position,
        setPosition,
        handleMovement,
      }}
    >
      {children}
    </ToggleSwitchContext.Provider>
  );
};

export const useToggleSwitchContext = () => useContext(ToggleSwitchContext);

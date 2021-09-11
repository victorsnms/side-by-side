import { createContext, ReactNode, useState, useContext } from "react";

interface FormProviderProps {
    children: ReactNode;
}

interface FormContextData {
    formOption: string;
    setFormOption: React.Dispatch<React.SetStateAction<string>>;
}
  
const FormContext = createContext<FormContextData>({} as FormContextData);

export const FormProvider = ({children}: FormProviderProps) => {
    const [formOption, setFormOption] = useState("login");

    return(
        <FormContext.Provider value={{ formOption, setFormOption }}>
            {children}
        </FormContext.Provider>
    );
}

export const useFormContext = () => useContext(FormContext);
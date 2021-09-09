import {
  FormControl,
  FormErrorMessage,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";
import { FieldError } from "react-hook-form";
import { IconType } from "react-icons/lib";
import {
  useState,
  useEffect,
  useCallback,
  ForwardRefRenderFunction,
  forwardRef,
} from "react";

interface IInputProps extends ChakraInputProps {
  name: string;
  placeholder: string;
  icon: IconType;
  error?: FieldError | null;
  width?: string[];
}

type inputVariationProps = {
  [key: string]: string;
};

const inputVariation: inputVariationProps = {
  default: "gray.800",
  error: "red.500",
  focus: "green.400",
  filled: "green.300",
};

const InputBase: ForwardRefRenderFunction<HTMLInputElement, IInputProps> = (
  { name, placeholder, icon: Icon, error = null, ...rest },
  ref
) => {
  const [variation, setVariation] = useState("default");
  const [value, setValue] = useState("");

  useEffect(() => {
    if (error) {
      return setVariation("error");
    }
  }, [error]);

  const handleInputFocus = useCallback(() => {
    if (!error) {
      return setVariation("focus");
    }
  }, [error]);

  const handleInputBlur = useCallback(() => {
    if (value.length > 1 && !error) {
      return setVariation("filled");
    }
  }, [error, value]);

  return (
    <FormControl isInvalid={!!error}>
      <InputGroup flexDirection="column">
        <InputLeftElement
          color={
            variation === "default" ? "gray.200" : inputVariation[variation]
          }
          fontSize="1em"
        >
          <Icon />
        </InputLeftElement>

        <ChakraInput
          placeholder={placeholder}
          _placeholder={{ color: "gray.200" }}
          color={inputVariation[variation]}
          _hover={{ bgColor: "gray.60" }}
          onChangeCapture={(e) => setValue(e.currentTarget.value)}
          onBlurCapture={handleInputBlur}
          onFocus={handleInputFocus}
          name={name}
          pb="1px"
          border="1px"
          borderColor={
            variation === "default" ? "green.50" : inputVariation[variation]
          }
          borderRadius="15px"
          boxShadow="md"
          size="md"
          ref={ref}
          {...rest}
        />

        {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </InputGroup>
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);

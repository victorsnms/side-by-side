import {
  FormControl,
  FormErrorMessage,
  Textarea as ChakraTextarea,
  TextareaProps as ChakraTextareaProps,
  Box,
  Flex,
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

interface TextareaProps extends ChakraTextareaProps {
  name: string;
  placeholder: string;
  icon: IconType;
  error?: FieldError | null;
  width?: string[];
}

type textareaVariationProps = {
  [key: string]: string;
};

const inputVariation: textareaVariationProps = {
  default: "gray.800",
  error: "red.500",
  focus: "green.400",
  filled: "green.300",
};

const TextareaBase: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextareaProps
> = ({ name, placeholder, icon: Icon, error = null, ...rest }, ref) => {
  const [variation, setVariation] = useState("default");
  const [value, setValue] = useState("");

  useEffect(() => {
    if (error) {
      setVariation("error");
    } else if (value.length > 1) {
      setVariation("filled");
    }
  }, [error, value]);

  const handleTextareaFocus = useCallback(() => {
    if (!error) {
      setVariation("focus");
    }
  }, [error]);

  const handleTextareaBlur = useCallback(() => {
    if (value.length > 1 && !error) {
      setVariation("filled");
    }
  }, [error, value]);

  return (
    <FormControl isInvalid={!!error}>
      <Flex
        border="1px"
        borderColor={
          variation === "default" ? "green.50" : inputVariation[variation]
        }
        borderRadius="15px"
        boxShadow="md"
        position="relative"
      >
        <Box
          color={
            variation === "default" ? "gray.200" : inputVariation[variation]
          }
          fontSize="1em"
          position="absolute"
          zIndex="7"
          left="12px"
          top="12px"
        >
          <Icon />
        </Box>

        <ChakraTextarea
          placeholder={placeholder}
          _placeholder={{ color: "gray.200" }}
          color={inputVariation[variation]}
          _hover={{ bgColor: "gray.60" }}
          onChangeCapture={(e) => setValue(e.currentTarget.value)}
          onBlurCapture={handleTextareaBlur}
          onFocus={handleTextareaFocus}
          name={name}
          pb="1px"
          size="md"
          ref={ref}
          {...rest}
          flex="1"
          paddingLeft="2.5rem"
          border="none"
        />
      </Flex>
      {!!error && (
        <FormErrorMessage mt="-2px" mb={{ lg: "-8px" }}>
          {error.message}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

export const Textarea = forwardRef(TextareaBase);

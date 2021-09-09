import { ButtonProps } from "@chakra-ui/core";
import { Button } from "@chakra-ui/react";

interface IButtonFormsProps extends ButtonProps {
    children: string;
    handleClick: () => void;
    width: string[];
}

export const ButtonForms = ({ children, handleClick,  width }: IButtonFormsProps) => {
  return (
    <Button
      as="button"
      fontSize="20px"
      fontWeight="500"
      fontFamily="Didact Gothic"
      bg="green.300"
      color="white"
      size="md"
      w={width}
      borderRadius="20px"
      onClick={handleClick}
      _hover={{ bg: "green.400" }}
    >
      { children }
    </Button>
  );
};

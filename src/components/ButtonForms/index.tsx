import { Button } from "@chakra-ui/react";

interface IButtonFormsProps {
    children: string;
    handleClick?: () => void;
    width: string[];
    type: "button" | "submit" | "reset" | undefined;
}

export const ButtonForms = ({ children, handleClick=undefined, width, type=undefined }: IButtonFormsProps) => {
  return (
    <Button
      type={type}
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

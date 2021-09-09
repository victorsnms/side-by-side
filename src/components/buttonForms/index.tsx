import { Button } from "@chakra-ui/react";

interface IButtonFormsProps {
    children: string;
    handleClick: () => void;
}

export const ButtonForms = ({ children, handleClick }: IButtonFormsProps) => {
  return (
    <Button
      as="button"
      fontSize="20px"
      fontWeight="600"
      fontFamily="Didact Gothic"
      bg="green.300"
      color="white"
      w="75%"
      maxW="338px"
      h="38px"
      borderRadius="20px"
      onClick={handleClick}
      _hover={{ bg: "green.400" }}
    >
      { children }
    </Button>
  );
};

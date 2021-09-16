import { Button, ButtonProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ButtonCarouselProps extends ButtonProps {
  children: ReactNode;
  onClick: () => void;
}

export const ButtonCarousel = ({ children, onClick }: ButtonCarouselProps) => {
  return (
    <Button
      onClick={onClick}
      borderRadius="0"
      fontSize="25px"
      h={{ base: "10vh", lg: "193px" }}
      mt={{ base: "52px", lg: "0" }}
      bgColor="transparent"
      _hover={{ bgColor: "rgba(0,0,0,.2)" }}
      _focus={{}}
      color={{ base: "white" }}
    >
      {children}
    </Button>
  );
};

import { Box, Image } from "@chakra-ui/react";
import LoginImage from "../../assets/images/editthisimage.png";

export const CoolImage = () => {
  return (
    <Box display="flex" justifyContent="center">
      <Image w="70%" maxW="300px" src={LoginImage}></Image>
    </Box>
  );
};

import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Center, Flex, Text } from "@chakra-ui/layout";
import HomeMenu from "../../components/HomeMenu";
import backgroundPlastic from "../../assets/images/plastic.png";
import backgroundCup from "../../assets/images/bluecup.png";
import homeMap from "../../assets/images/homemap.svg";
import homeTaggedMap from "../../assets/images/hometaggedmap.svg";
import { useFormContext } from "../../providers/FormContext";
import { useHistory } from "react-router";
import BadgesDisplay from "../../components/BadgesDisplay";

const Home = () => {
  const { setFormOption } = useFormContext();
  const history = useHistory();

  const sendTo = (path: string) => {
    setFormOption(path);
    history.push("/joinUs");
  };

  return (
    <Flex direction="column">
      <HomeMenu />
      <Flex
        direction="column"
        justifyContent="center"
        w="100%"
        h={["50vh", "60vh", "70vh", "80vh"]}
        bg="gray.100"
        pl={["40px", "50px", "60px", "70px"]}
        bgImage={backgroundPlastic}
        backgroundSize={["200%", "180%", "165%", "140%, 100%"]}
        bgPosition="center"
        bgRepeat="no-repeat"
      >
        <Text fontSize={["2xl", "2xl", "4xl"]} fontWeight="bold" color="white">
          Find, Recycle, Connect
        </Text>
        <Text
          fontSize={["xl", "xl", "2xl"]}
          color="white"
          maxW={["200px", "300px", "350px"]}
        >
          For a cleaner and more sustainable world
        </Text>
        <Button
          mt="6"
          w="130px"
          fontSize={["xl", "xl", "2xl"]}
          fontWeight="500"
          bg="gray.50"
          color="green.300"
          h="45px"
          borderRadius="10px"
          _hover={{ bg: "green.300", color: "green.400" }}
          _focus={{}}
          onClick={() => sendTo("Sign up")}
        >
          Join us
        </Button>
      </Flex>

      <Center
        w="100%"
        py="10"
        bg="white"
        fontSize={["3xl", "4xl"]}
        fontWeight="bold"
      >
        RECYCLING
      </Center>
      <Flex mb="20" textAlign={["center", "center", "left"]} direction="column">
        <Flex
          px="20"
          bg="white"
          justifyContent="space-around"
          direction={["column", "column", "row"]}
        >
          <Flex justifyContent="center" direction="column">
            <Text fontSize="3xl">Find collection points</Text>
            <Text maxW="300px">Search for the precise places to disposal
                  each of your espicific wastes.</Text>
          </Flex>
          <Image
            src={homeTaggedMap}
            w={["200px", "250px", "300px"]}
            h={["200px", "250px", "300px"]}
          />
        </Flex>
        <Flex
          px="20"
          mt="50px"
          justifyContent="space-around"
          direction={["column-reverse", "column-reverse", "row"]}
        >
          <Image
            src={homeMap}
            w={["200px", "250px", "300px"]}
            h={["200px", "250px", "300px"]}
          />
          <Flex justifyContent="center" direction="column">
            <Text fontSize="3xl">Register new points</Text>
            <Text maxW="300px">Contribute to our network, 
              by adding known collection points.</Text>  
          </Flex>
        </Flex>
      </Flex>
      <Flex
        direction="column"
        justifyContent="center"
        w="100%"
        h={["50vh", "60vh", "70vh", "80vh"]}
        bg="gray.100"
        pl={["40px", "50px", "60px", "70px"]}
        bgImage={backgroundCup}
        backgroundSize={["200%", "180%", "150%", "130%, 100%"]}
        bgPosition="center"
        bgRepeat="no-repeat"
      >
        <Text fontSize={["2xl", "2xl", "3xl"]} fontWeight="bold" color="white">
          EVENTS
        </Text>
        <Text
          fontSize={["xl", "xl", "2xl"]}
          color="white"
          maxW={["200px", "300px", "350px"]}
        >
          Join the existing events and create new 
          ones to contribute to cleaning the world.
        </Text>
      </Flex>
      <Flex py="100px" alignItems="center" direction="column">
        <Text fontSize={["2xl", "2xl", "3xl"]}>Save the planet!</Text>
        <Button
          mt="6"
          w={["250px", "300px", "350px", "400px"]}
          fontSize={["xl", "xl", "2xl"]}
          fontWeight="500"
          bg="green.300"
          color="black"
          h="45px"
          borderRadius="10px"
          _hover={{ bg: "green.300", color: "green.400" }}
          _focus={{}}
          onClick={() => sendTo("Sign up")}
        >
          Join us
        </Button>
      </Flex>
      <Center
        h={["15vh", "14vh", "13vh", "12vh"]}
        fontSize={["sm", "md", "lg"]}
        bg="white"
      >
        &copy;Copyright 2021 Echologys Brasil SA. All rights reserved
      </Center>
    </Flex>
  );
};

export default Home;

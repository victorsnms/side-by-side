import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Center, Flex, Text } from "@chakra-ui/layout";
import HomeMenu from "../../components/HomeMenu";

const Home = () => {


    return(
        <Flex direction="column">
            <HomeMenu/>
                <Flex 
                    direction="column" 
                    justifyContent="center"
                    w="100%"
                    h="50vh"
                    bg="gray.100"
                    pl="50px"
                    bgImage="url('/images/plastic.png')" 
                    bgPosition="center"
                    bgRepeat="no-repeat">
                    <Text 
                        fontSize={["2xl", "2xl", "3xl"]}
                        fontWeight="500"
                        color="white"
                    >
                        Find, Recycle, Connect
                    </Text>
                    <Text
                         fontSize={["xl", "xl", "2xl"]}
                         color="white"
                         maxW={["200px","300px", "350px"]}
                    >
                        For a cleaner and more 
                        sustainable world
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
                    >
                        Join us
                    </Button>
                </Flex>
            
            <Center 
                    w="100%"
                    py="10"  
                    fontSize={["3xl", "4xl", "5xl"]}  
                >RECYCLING</Center>
            <Flex mb="20" textAlign={["center", "center", "left"]} direction="column">
                <Flex px="20" justifyContent="space-around" direction={["column", "column", "row"]}>
                    <Flex justifyContent="center" direction="column">
                        <Text>Find collection wastes</Text>
                        <Text>Das wer tribst dush der maine seele, 
                            zum  bisth zo rum dur ich in mir</Text>
                    </Flex>
                    <Image w={["200px", "250px", "300px"]} h={["200px", "250px", "300px"]} bg="gray.300"/>
                </Flex>
                <Flex px="20" justifyContent="space-around" direction={["column-reverse", "column-reverse", "row"]}>
                    <Image w={["200px", "250px", "300px"]} h={["200px", "250px", "300px"]} bg="gray.300"/>
                    <Flex justifyContent="center" direction="column">
                        <Text>Register new points</Text>
                        <Text>Das wer tribst dush der maine seele, 
                            zum  bisth zo rum dur ich in mir</Text>
                    </Flex>
                </Flex>
            </Flex>
            <Flex 
                    direction="column" 
                    justifyContent="center"
                    w="100%"
                    h="50vh"
                    bg="gray.100"
                    pl="50px"
                    bgImage="url('/images/plastic.png')" 
                    bgPosition="center"
                    bgRepeat="no-repeat">
                    <Text 
                        fontSize={["2xl", "2xl", "3xl"]}
                        fontWeight="500"
                        color="white"
                    >
                        EVENTS
                    </Text>
                    <Text
                         fontSize={["xl", "xl", "2xl"]}
                         color="white"
                         maxW={["200px","300px", "350px"]}
                    >
                        Participe de eventos que 
                        contruibuem para limpeza 
                        do planeta
                        Crie eventos
                    </Text>
                </Flex>
                <Flex py="100px" alignItems="center" direction="column">
                    <Text fontSize={["2xl", "2xl", "3xl"]}>Salve o planeta!</Text>
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
                    >
                        Join us
                    </Button>
                </Flex>
                <Center
                    h={["15vh", "14vh", "13vh", "12vh"]} 
                    fontSize={["sm", "md", "lg"]}
                    bg="white"
                >Copyright 2021 Echologys Brasil SA. All rights reserved</Center>
        </Flex>
    )
};

export default Home;
import { Image, Flex, Text } from "@chakra-ui/react";

const BadgesDisplay = () => {


    return(
        <Flex mt={["10%", "5%", "2%"]} flexDirection="column" textAlign="center">
            <Text fontSize={["xl", "2xl", "3xl", "4xl"]} pt="5%" fontWeight="bold">BADGES</Text>
            <Flex
                flexWrap="wrap"
                justifyContent="center"
                w="100%" 
                h={["20vh", "30vh", "40vh", "50vh"]}
                alignItems="center"
                
            >
                <Flex flexDirection="column" w={["30%","30%", "25%", "20%", "15%" ]} alignItems="center">
                    <Text fontSize={["sm","md","lg", "xl"]} fontWeight="bold">Join the fight</Text>
                    <Image
                            w={["50px", "65px", "80px", "100px", "125px"]}
                            h={["50px", "65px", "80px", "100px", "125px"]}
                            bgColor="gray.100"
                            borderRadius="full"
                    />
                </Flex>
                <Flex flexDirection="column" w={["30%","30%", "25%", "20%", "15%" ]} alignItems="center">
                    <Text fontSize={["sm","md","lg", "xl"]} fontWeight="bold">Collection point creator</Text>
                    <Image
                            w={["50px", "65px", "80px", "100px", "125px"]}
                            h={["50px", "65px", "80px", "100px", "125px"]}
                            bgColor="gray.100"
                            borderRadius="full"
                    />
                </Flex>
                <Flex flexDirection="column" w={["30%","30%", "25%", "20%", "15%" ]} alignItems="center">
                    <Text fontSize={["sm","md","lg", "xl"]} fontWeight="bold">Event creator</Text>
                    <Image
                            w={["50px", "65px", "80px", "100px", "125px"]}
                            h={["50px", "65px", "80px", "100px", "125px"]}
                            bgColor="gray.100"
                            borderRadius="full"
                    />
                </Flex>
                <Flex flexDirection="column" w={["30%","30%", "25%", "20%", "15%" ]} alignItems="center">
                    <Text fontSize={["sm","md","lg", "xl"]} fontWeight="bold">Long way to go</Text>
                    <Image
                            w={["50px", "65px", "80px", "100px", "125px"]}
                            h={["50px", "65px", "80px", "100px", "125px"]}
                            bgColor="gray.100"
                            borderRadius="full"
                    />
                </Flex>
                <Flex flexDirection="column" w={["30%","30%", "25%", "20%", "15%" ]} alignItems="center">
                    <Text fontSize={["sm","md","lg", "xl"]} fontWeight="bold">Keeper of nature</Text>
                    <Image
                            w={["50px", "65px", "80px", "100px", "125px"]}
                            h={["50px", "65px", "80px", "100px", "125px"]}
                            bgColor="gray.100"
                            borderRadius="full"
                    />
                </Flex>
                <Flex flexDirection="column" w={["30%","30%", "25%", "20%", "15%" ]} alignItems="center">
                    <Text fontSize={["sm","md","lg", "xl"]} fontWeight="bold">getting there</Text>
                    <Image
                            w={["50px", "65px", "80px", "100px", "125px"]}
                            h={["50px", "65px", "80px", "100px", "125px"]}
                            bgColor="gray.100"
                            borderRadius="full"
                    />
                </Flex>
                <Flex flexDirection="column" w={["30%","30%", "25%", "20%", "15%" ]} alignItems="center">
                    <Text fontSize={["sm","md","lg", "xl"]} fontWeight="bold">Care for the envirement</Text>
                    <Image
                            w={["50px", "65px", "80px", "100px", "125px"]}
                            h={["50px", "65px", "80px", "100px", "125px"]}
                            bgColor="gray.100"
                            borderRadius="full"
                    />
                </Flex>
                <Flex flexDirection="column" w={["30%","30%", "25%", "20%", "15%" ]} alignItems="center">
                    <Text fontSize={["sm","md","lg", "xl"]} fontWeight="bold">Award winner</Text>
                    <Image
                           w={["50px", "65px", "80px", "100px", "125px"]}
                           h={["50px", "65px", "80px", "100px", "125px"]}
                            bgColor="gray.100"
                            borderRadius="full"
                    />
                </Flex>
                <Flex flexDirection="column" w={["30%","30%", "25%", "20%", "15%" ]} alignItems="center">
                    <Text fontSize={["sm","md","lg", "xl"]} fontWeight="bold">Capitain Planet</Text>
                    <Image
                           w={["50px", "65px", "80px", "100px", "125px"]}
                           h={["50px", "65px", "80px", "100px", "125px"]}
                            bgColor="gray.100"
                            borderRadius="full"
                    />
                </Flex>
            </Flex>
        </Flex>
    )
};

export default BadgesDisplay;
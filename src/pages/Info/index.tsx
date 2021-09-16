import { Flex, Accordion, Heading, Image } from "@chakra-ui/react";
import { InfoDropDown } from "../../components/InfoDropDown";
import { DashboardMenu } from "../../components/DashboardMenu";
import { infos } from "../../utils/infos";
import { BottomMenu } from "../../components/BottomMenu";
import LogoImg from "../../assets/images/biglogog.png";

export const Info = () => {
  const isMobile = window.innerWidth < 992;

  return (
    <Flex
      pl={{ base: "0", lg: "125px" }}
      w="90vw"
      minH="100vh"
      h="auto"
      m="0 auto"
      mb={{ base: "80px", lg: "0" }}
      justifyContent="space-between"
    >
      <Image src={LogoImg} w="60px" mt="10vh" position="absolute" top="-38px" left="10px" display={{ lg: "none" }} />
      {isMobile ? <BottomMenu /> : <DashboardMenu />}
      <Flex alignItems="center" p="10" w="100%" flexDirection="column">
        <Heading
          as="h2"
          m="3rem 0 4rem"
          textTransform="uppercase"
          fontSize="2xl"
        >
          Informations
        </Heading>
        <Accordion w={{ base: "90vw", lg: "85%" }} allowToggle>
          {infos.map(({ title, content },index) => (
            <InfoDropDown w="100%" title={title} content={content} key={index}/>
          ))}
        </Accordion>
      </Flex>
    </Flex>
  );
};

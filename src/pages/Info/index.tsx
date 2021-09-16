import { Flex, Accordion, Heading } from "@chakra-ui/react";
import { InfoDropDown } from "../../components/InfoDropDown";
import { DashboardMenu } from "../../components/DashboardMenu";
import { infos } from "../../utils/infos";
import { BottomMenu } from "../../components/BottomMenu";

export const Info = () => {
  return (
    <Flex
      pl={{ base: "0", md: "125px", lg: "125px" }}
      w="90vw"
      minH="100vh"
      h="auto"
      m="0 auto"
      mb={{ base: "80px", lg: "0" }}
      justifyContent="space-between"
    >
      <BottomMenu />
      <DashboardMenu />
      <Flex alignItems="center" p="10" w="100%" flexDirection="column">
        <Heading
          as="h2"
          m="3rem 0 4rem"
          textTransform="uppercase"
          fontSize="2xl"
        >
          Informations
        </Heading>
        <Accordion w={{ base: "90vw", md: "85%", lg: "85%" }} allowToggle>
          {infos.map(({ title, content }, index) => (
            <InfoDropDown
              w="100%"
              title={title}
              content={content}
              key={index}
            />
          ))}
        </Accordion>
      </Flex>
    </Flex>
  );
};

import { Flex } from "@chakra-ui/react";
import { useUser } from "../../providers/UserContext";
import { Badge } from "../Badge";

const BadgesDisplay = () => {
  const {
    userData: { badges },
  } = useUser();

  return (
    <Flex mt={["5%", "5%", "0%"]} pb={{ base: "250px", lg: "0"}} flexDirection="column" textAlign="center">
      <Flex
        flexWrap="wrap"
        justifyContent="center"
        w={{ base: "100%" }}
        h={["20vh", "30vh", "40vh", "50vh"]}
        alignItems="center"
      >
        {!!badges &&
          Object.entries(badges).map(([key, val], index) => (
            <Badge key={index} badgeKey={key} badgeValue={val} />
          ))}
      </Flex>
    </Flex>
  );
};

export default BadgesDisplay;

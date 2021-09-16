import ImageError404 from "../../assets/images/error404.png";
import { Text, Heading, Button, Image, Flex, Box } from "@chakra-ui/react";
import { useHistory } from "react-router";
import { useAuth } from "../../providers/AuthContext";

export const PageNotFound = () => {
  const history = useHistory();
  const { accessToken } = useAuth();

  return (
    <Flex
      w="65vw"
      h="100vh"
      m="0 auto"
      direction="column"
      justify="center"
      align="center"
      textAlign="center"
    >
      <Image src={ImageError404} w="300px" mb="2em" />
      <Box>
        <Heading color="gray.800" fontSize={[40, 50, 80]}>
          Error 404
        </Heading>
        <Text pb="0.5em" fontSize="20px">
          Page not found! Click the button to go { accessToken ? "dashboard" : "homepage" }
        </Text>
        { accessToken &&
            <Button
            bgColor="transparent"
            textDecoration="underline"
            _hover={{ color: "green.400" }}
            onClick={() => history.push("/dashboard")}
          >
            Go dashboard &gt;&gt;
          </Button>
        }
        { !accessToken &&
            <Button
            bgColor="transparent"
            textDecoration="underline"
            _hover={{ color: "green.400" }}
            onClick={() => history.push("/")}
          >
            Go homepage &gt;&gt;
          </Button>
        }
      </Box>
    </Flex>
  );
};

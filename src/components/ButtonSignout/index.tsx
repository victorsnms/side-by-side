import { Button, Icon } from "@chakra-ui/react";
import { BiLogOut } from "react-icons/bi";
import { useAuth } from "../../providers/AuthContext";

export const ButtonSignout = () => {
    const { signOut } = useAuth();

    return(
        <Button
            fontSize={["lg", "xl", "2xl"]}
            fontWeight="300"
            bg="grey.50"
            color="green.400"
            h="38px"
            _hover={{ color: "green.300" }}
            _focus={{}}
            onClick={signOut}
          >
            <Icon fontSize="2xl" as={BiLogOut} />
          </Button>
    );
}
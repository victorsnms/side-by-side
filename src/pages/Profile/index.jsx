import { Button } from "@chakra-ui/button";
import { useAuth } from "../../providers/AuthContext"

const Profile = () => {

    const { signOut } = useAuth()

    return(
        <>
            <Button
                    fontSize={["lg", "xl", "2xl"]}
                    fontWeight="300"
                    bg="green.300"
                    color="white"
                    h="38px"
                    borderRadius="5px"
                    _hover={{ bg: "gray.50", color: "green.300" }}
                    _focus={{}}
                    onClick={signOut}
                >
                    LOGOUT
                </Button>

        </>

    )
};

export default Profile
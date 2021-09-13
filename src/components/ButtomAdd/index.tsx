import {IconButton,Icon, ButtonProps} from "@chakra-ui/react"
import  {TiPlus} from "react-icons/ti"

interface ButtomProps extends ButtonProps {

}

export const ButtonAdd = ({...rest}:ButtomProps) => {
    return (
            <IconButton aria-label="Show modals" colorScheme="white" color="green.300" borderRadius="100%" position="absolute" top="10%" right="10%" {...rest} bg="white" zIndex="7">
                <Icon as={TiPlus} fontSize='2xl'/>
            </IconButton>
    )
}
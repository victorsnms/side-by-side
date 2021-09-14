import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
  Text,
  Flex,
} from "@chakra-ui/react";
import { BiCalendarAlt } from "react-icons/bi";
import { FiClock } from "react-icons/fi";
import { RiGroupFill } from "react-icons/ri";
import { ButtonForms } from "../ButtonForms";
import { Marker } from "../../types/makerData";

interface EventDetailsProps extends Marker {
  marker: Marker;
}

export const EventDetails = ({ marker }: EventDetailsProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <ButtonForms
        marginLeft={"2px"}
        marginBottom={"2px"}
        width={["100px", "100px", "100px"]}
        type={undefined}
        onClick={onOpen}
        color={"gray.60"}
        backgroundColor={"green.300"}
        h={4}
        fontSize={"12px"}
      >
        Show details
      </ButtonForms>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg="green.70" />
        <ModalContent>
          <ModalHeader padding={0}>
            <Box
              backgroundImage={marker.picture_url}
              width={"100%"}
              height={150}
              paddingX={5}
              paddingY={5}
              color={"gray.60"}
              position={"relative"}
            >
              <Text fontSize={"1.5rem"}>{marker.title}</Text>
              <Flex direction={"column"} position={"absolute"} bottom={2}>
                <Flex alignItems={"center"} fontSize={"1rem"}>
                  <Box marginRight={"5px"}>
                    <BiCalendarAlt />
                  </Box>
                  {marker.date}
                </Flex>
                <Flex alignItems={"center"} fontSize={"1rem"}>
                  <Box marginRight={"5px"}>
                    <FiClock />
                  </Box>
                  {marker.start_time} - {marker.end_time}
                </Flex>
              </Flex>
              <Flex
                direction={"column"}
                position={"absolute"}
                bottom={2}
                right={4}
              >
                <Flex alignItems={"center"} fontSize={"1rem"}>
                  {marker.participants?.length}
                  <Box marginLeft={"5px"}>
                    <RiGroupFill />
                  </Box>
                </Flex>
              </Flex>
            </Box>
          </ModalHeader>
          <ModalCloseButton color="gray.60" />
          <ModalBody color={"gray.400"}>{marker.description}</ModalBody>

          <ModalFooter justifyContent={"center"}>
            <ButtonForms
              width={["250px", "250px", "250px"]}
              type={undefined}
              onClick={onClose}
            >
              Join
            </ButtonForms>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

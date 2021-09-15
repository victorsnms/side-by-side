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
import { useEffect } from "react";
import { useUser } from "../../providers/UserContext";
import { useAuth } from "../../providers/AuthContext";
import { api } from "../../services/api";

interface EventDetailsProps extends Marker {
  marker: Marker;
}

export const EventDetails = ({ marker }: EventDetailsProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUser, userData } = useUser();
  const { accessToken, id } = useAuth();

  useEffect(() => {
    getUser(id, accessToken);
  }, []);

  const handleClick = () => {
    //updates event participants and user events
    if (marker.participants !== undefined) {
      const { email, image_url, name, id: idUser, my_events } = userData;
      const userFilteredData = {
        name: name,
        email: email,
        image_url: image_url,
        id: idUser,
      };
      const newData = [userFilteredData, ...marker.participants];

      const {
        address,
        lat,
        contact,
        created_at,
        end_time,
        lng,
        start_time,
        title,
        date,
        description,
        picture_url,
        id: eventId,
      } = marker;
      const eventFilteredData = {
        address: address,
        contact: contact,
        created_at: created_at,
        date: date,
        description: description,
        end_time: end_time,
        lat: lat,
        lng: lng,
        picture_url: picture_url,
        start_time: start_time,
        title: title,
        id: eventId,
      };

      const eventData = [eventFilteredData, ...my_events];

      console.log("event", eventData);
      if (
        !marker.participants.some((user) => user.id === userFilteredData.id)
      ) {
        api
          .patch(
            `/markers/${marker.id}`,
            { participants: newData },
            {
              headers: { Authorization: `Bearer ${accessToken}` },
            }
          )
          .then((_) => console.log("Modal de que você entrou no grupo"))
          .catch((_) => console.log("Algo deu errado"));

        api
          .patch(
            `users/${idUser}`,
            { my_events: eventData },
            {
              headers: { Authorization: `Bearer ${accessToken}` },
            }
          )
          .catch((_) => console.log("Erro ao utilizar my_even"));
      } else {
        console.log("Você já está no grupo");
      }
    }
  };

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
              onClick={handleClick}
            >
              Join
            </ButtonForms>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

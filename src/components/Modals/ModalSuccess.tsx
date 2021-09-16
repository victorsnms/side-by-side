import {
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalFooter,
  Heading,
  Text,
  Divider,
  Flex,
  VStack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import ImageSuccess from "../../assets/images/flowers-success.svg";
import { ButtonForms } from "../ButtonForms";
import { useUser } from "../../providers/UserContext";
import { useAuth } from "../../providers/AuthContext";
import { api } from "../../services/api";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  error?: string;
  countAsExperience?: boolean;
}

export const ModalSuccess = ({
  isOpen,
  onClose,
  message,
  error,
  countAsExperience = false,
}: ModalProps) => {
  const { getUser, userData } = useUser();
  const { accessToken, id } = useAuth();
  useEffect(() => {
    getUser(id, accessToken);
  }, []);

  const updateExperience = () => {
    onClose();
    if (countAsExperience) {
      const { experience } = userData;
      const newExperience = experience + 1;
      api
        .patch(
          `/users/${id}`,
          { experience: newExperience },
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        )
        .then((res) => console.log(res));
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={updateExperience} trapFocus={false}>
        <ModalOverlay bg="green.70" />
        <ModalContent
          backgroundImage={ImageSuccess}
          w="224px"
          h="328px"
          backgroundRepeat="no-repeat"
          backgroundPosition=" center 32px"
          backgroundColor="gray.50"
        >
          <ModalHeader></ModalHeader>
          <ModalCloseButton fontSize="8px" />
          <ModalBody h="280px" pb="0">
            <Flex h="95%" alignItems="flex-end">
              <VStack>
                <Heading as="h1" fontSize="18px">
                  <b>Wo hoo ! ! ! </b>
                </Heading>
                <Text
                  as="p"
                  textAlign="center"
                  children={message}
                  margin="16px"
                  fontSize="12px"
                />
                <Divider borderColor="blue.500" borderBottomWidth="2px" />
              </VStack>
            </Flex>
          </ModalBody>
          <ModalFooter pt="0" justifyContent="center" pb="8px">
            <ButtonForms
              children="Done"
              type="button"
              width={["40%"]}
              h="32px"
              fontSize="14px"
              onClick={updateExperience}
            />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

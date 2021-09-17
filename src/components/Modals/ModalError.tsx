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
import ImageError from "../../assets/images/rain-error.svg";
import { ButtonForms } from "../ButtonForms";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  error?: string;
}

export const ModalError = ({ isOpen, onClose, message, error }: ModalProps) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} trapFocus={false}>
        <ModalOverlay bg="green.70" />
        <ModalContent
          backgroundImage={ImageError}
          w="224px"
          h="328px"
          backgroundRepeat="no-repeat"
          backgroundPosition=" center 0px"
          backgroundColor="gray.50"
          boxShadow="lg"
          
        >
          <ModalHeader></ModalHeader>
          <ModalCloseButton fontSize="8px" />
          <ModalBody h="280px" pb="0">
            <Flex h="95%" alignItems="flex-end">
              <VStack>
                <Heading as="h1" fontSize="18px">
                  <b>Uh oh</b>
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
              children="Try again"
              type="button"
              width={["40%"]}
              h="32px"
              fontSize="14px"
              onClick={onClose}
              bg="blue.500"
            />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

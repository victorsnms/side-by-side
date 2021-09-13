import {
  Button,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Modal,
  VStack,
  Flex,
  Text,
  Textarea,
  HStack,
  useDisclosure,
} from "@chakra-ui/react";
import { ToggleSwitch } from "../ToggleSwitch";

export const EventModal = () => {
  const options = ["Event", "Wast Point"];
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg={"rgba(72, 135, 136, 0.5)"}/>
        <ModalContent bg={"white"} mb={"0px"} alignSelf={"flex-end"} h="80%">
          <ModalCloseButton w="32px" alignSelf="flex-end" bg="transparent" outline="none" border="none" size="sm"/>
          <ModalHeader display="flex" justifyContent="center">
            <ToggleSwitch options={options} />
          </ModalHeader>
          <ModalBody>
            <Flex as="form" justifyContent="center">
              <VStack>
                <Text as="p">Create a new Event</Text>
                <input placeholder="Aguardadno imput component"></input>
                <input placeholder="Aguardadno imput component"></input>
                <input placeholder="Aguardadno imput component"></input>
                <HStack>
                  <input placeholder="Aguardadno imput component"></input>
                  <input placeholder="Aguardadno imput component"></input>
                </HStack>
                <Textarea placeholder="Description..."></Textarea>
                <input placeholder="Aguardadno imput component"></input>
              </VStack>
            </Flex>
          </ModalBody>
          <ModalFooter justifyContent="center">
            <Button>Create</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
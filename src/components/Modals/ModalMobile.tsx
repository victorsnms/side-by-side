import {
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Modal,
} from "@chakra-ui/react";

import { ToggleSwitch } from "../ToggleSwitch";

import { ReactElement } from "react";

interface ModalMobileProps {
  isOpen: boolean;
  onClose: () => void;
  options: string[];
  children: ReactElement;
}

export const ModalMobile = ({
  isOpen,
  onClose,
  options,
  children,
}: ModalMobileProps) => {

  return (
    <Modal isOpen={isOpen} onClose={onClose} scrollBehavior={"inside"} trapFocus={false} >
      <ModalOverlay bg="green.70" />
      <ModalContent
        bg={"white"}
        mb={"0px"}
        alignSelf={"flex-end"}
        justifySelf="flex-start"
        h={["max-content", "inherit", "100%", "100%"]}
        width="90%"
        borderBottomRadius="none"
        textAlign="left"
      >
        <ModalCloseButton
          w="32px"
          alignSelf="flex-end"
          bg="transparent"
          outline="none"
          border="none"
          size="sm"
        />
        <ModalHeader display="flex" justifyContent="center" mt="1rem">
          <ToggleSwitch options={options} />
        </ModalHeader>
        <ModalBody >
            {children}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

import {
  Drawer,
  DrawerOverlay,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
} from "@chakra-ui/react";

import { ReactElement } from "react";
import { FaGlasses } from "react-icons/fa";
import { ToggleSwitch } from "../ToggleSwitch";

interface DrawerDesktopProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactElement;
  options: string[];
}

export const DrawerDesktop = ({
  isOpen,
  onClose,
  children,
  options,
}: DrawerDesktopProps) => {
  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      placement={"left"}
      trapFocus={false}
    >
      <DrawerOverlay bg="green.70" />
      <DrawerContent minW="350px">
        <DrawerCloseButton />
        <DrawerHeader>
          <ToggleSwitch options={options} />
        </DrawerHeader>
        <DrawerBody >{children}</DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

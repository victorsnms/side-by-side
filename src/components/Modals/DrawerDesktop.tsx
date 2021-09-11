import {
  Drawer,
  DrawerOverlay,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
} from "@chakra-ui/react";

import { ReactElement, Dispatch } from "react";
import { ToggleSwitch } from "../ToggleSwitch";

interface DrawerDesktopProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactElement;
  options: string[];
  switchOption: boolean;
  setSwitchOption: Dispatch<React.SetStateAction<boolean>>;
}

export const DrawerDesktop = ({
  isOpen,
  onClose,
  children,
  options,
  setSwitchOption,
  switchOption,
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
          <ToggleSwitch
            options={options}
            setSwitchOption={setSwitchOption}
            switchOption={switchOption}
          />
        </DrawerHeader>
        <DrawerBody>{children}</DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

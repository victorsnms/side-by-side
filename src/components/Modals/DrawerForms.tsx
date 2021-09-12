import {
  Drawer,
  DrawerOverlay,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  useBreakpoint,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

import { useState } from "react";
import { ToggleSwitch } from "../ToggleSwitch";
import { FormEvent } from "./FormEvent";
import { FormWasteCollection } from "./FormWasteCollection";

export const DrawerForms = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const options = ["Event", "Wast Point"];
  const isMobile = window.innerWidth < 768;
  const position = isMobile ? "bottom" : "left";

  const [switchOption, setSwitchOption] = useState(true);
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement={position}
        trapFocus={false}
      >
        <DrawerOverlay bg="green.70" />
        <DrawerContent minW={["80%", "80%","350px","350px"]} h={["90%","90%","100%", "100%"]} borderTopRadius={["12px","0"]}>
          <DrawerCloseButton />
          <DrawerHeader>
            <ToggleSwitch
              options={options}
              setSwitchOption={setSwitchOption}
              switchOption={switchOption}
            />
          </DrawerHeader>
          <DrawerBody>
            {switchOption ? <FormEvent /> : <FormWasteCollection />}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

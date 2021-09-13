import {
  Drawer,
  DrawerOverlay,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  useDisclosure,
} from "@chakra-ui/react";

import { useState, useEffect } from "react";
import { InputMarker } from "../../types/makerData";
import { ButtonAdd } from "../ButtomAdd";
import { ToggleSwitch } from "../ToggleSwitch";
import { FormEvent } from "./FormEvent";
import { FormWasteCollection } from "./FormWasteCollection";

interface DrawerFormProps extends InputMarker{
  isDisable:boolean
}

export const DrawerForms = ({isDisable, inputMarker}:DrawerFormProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const options = ["Event", "Wast Point"];
  const isMobile = window.innerWidth < 768;
  const position = isMobile ? "bottom" : "left";

  const [switchOption, setSwitchOption] = useState(true);

  useEffect(() => {
    setSwitchOption(true);
  }, []);
  return (
    <>
      <ButtonAdd onClick={onOpen} disabled={isDisable}/>

      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement={position}
        trapFocus={false}
      >
        <DrawerOverlay bg="green.70" />
        <DrawerContent
          minW={["80%", "80%", "350px", "350px"]}
          h={["90%", "90%", "100%", "100%"]}
          borderTopRadius={["12px", "0"]}
        >
          <DrawerCloseButton />
          <DrawerHeader>
            <ToggleSwitch
              options={options}
              setSwitchOption={setSwitchOption}
              switchOption={switchOption}
            />
          </DrawerHeader>
          <DrawerBody>
            {switchOption ? <FormEvent inputMarker={inputMarker} /> : <FormWasteCollection inputMarker={inputMarker}/>}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

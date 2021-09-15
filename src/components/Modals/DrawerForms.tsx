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
import { useFormContext } from "../../providers/FormContext";
import { InputMarker } from "../../types/makerData";
import { ButtonAdd } from "../ButtomAdd";
import { ToggleSwitch } from "../ToggleSwitch";
import { FormEvent } from "./FormEvent";
import { FormWasteCollection } from "./FormWasteCollection";

interface DrawerFormProps extends InputMarker {
  isDisable: boolean;
}

export const DrawerForms = ({ isDisable, inputMarker }: DrawerFormProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const options = ["Event", "Wast Point"];
  const isMobile = window.innerWidth < 768;
  const position = isMobile ? "bottom" : "left";

  const [switchOption, setSwitchOption] = useState(false);
  const { setFormOption } = useFormContext();
  useEffect(() => {
    setSwitchOption(true);
  }, []);

  const handleClick = () => {
    setFormOption("Event");
    setSwitchOption(false);
    onOpen();
  };
  return (
    <>
      <ButtonAdd onClick={handleClick} disabled={isDisable} />

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
          <DrawerHeader alignSelf="center">
            <ToggleSwitch
              options={options}
              setSwitchOption={setSwitchOption}
              switchOption={switchOption}
            />
          </DrawerHeader>
          <DrawerBody
            sx={{
              "&::-webkit-scrollbar": {
                width: "8px",
                borderRadius: "8px",
                backgroundColor: `rgba(72, 135, 136, 0.5)`,
                marginRight: "30px  "
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: `#488788`,
                borderRadius: "8px",
              },
            }}
          >
            {!switchOption ? (
              <FormEvent inputMarker={inputMarker} />
            ) : (
              <FormWasteCollection inputMarker={inputMarker} />
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

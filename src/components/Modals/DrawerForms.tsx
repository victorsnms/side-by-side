import {
  Drawer,
  DrawerOverlay,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useToggleSwitchContext } from "../../providers/ToggleSwitchContext";
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
  const isMobile = window.innerWidth < 768;
  const position = isMobile ? "bottom" : "left";

  const { setFormOption, setOptions, setIsLeft, isLeft } =
    useToggleSwitchContext();

  useEffect(() => {
    setOptions(["Event", "Wast Point"]);
  }, []);

  const handleClick = () => {
    setFormOption("Event");
    setIsLeft(!isLeft);
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
            <ToggleSwitch />
          </DrawerHeader>
          <DrawerBody
            sx={{
              "&::-webkit-scrollbar": {
                width: "8px",
                borderRadius: "8px",
                backgroundColor: `rgba(72, 135, 136, 0.5)`,
                marginRight: "30px  ",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: `#488788`,
                borderRadius: "8px",
              },
            }}
          >
            {!isLeft ? (
              <FormEvent inputMarker={inputMarker} onClose={onClose} />
            ) : (
              <FormWasteCollection
                inputMarker={inputMarker}
                onClose={onClose}
              />
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

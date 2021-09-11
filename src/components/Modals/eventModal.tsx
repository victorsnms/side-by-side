import { Button, useDisclosure } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {useState} from "react"

import { FormEvent } from "./FormEvent";
import { ModalMobile } from "./ModalMobile";
import { DrawerDesktop } from "./DrawerDesktop";

interface EventData {
  name: string;
  address: string;
  contact: string;
  time: string;
  date: string;
  description: string;
  picture_url?: string;
  voluntaries?: {
    name: string;
    id: string;
  }[];
  lat?: string;
  lgn?: string;
}

export const EventModal = () => {
  const options = ["Event", "Wast Point"];
  const { isOpen, onOpen, onClose } = useDisclosure();
  const desktop = 768
  const [isMobile, setIsMobile] = useState(window.innerWidth);
const [switchOption, setSwitchOption] = useState(false)


  const eventSchema = yup.object().shape({
    name: yup.string().required("Event name required"),
    address: yup.string().required("Eventa address required"),
    contact: yup.string().required("Email or cellphone required"),
    time: yup.string().required("Event time required"),
    date: yup.string().required("Event date required"),
    description: yup.string().required("Event description required"),
    picture_url: yup.string().url("Url image invalid"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(eventSchema) });

  const eventSubmit = (data: EventData) => {
    console.log(data);
  };

  const handleClick = () => {
    setIsMobile(window.innerWidth)
    onOpen()
  };

  return (
    <>
      <Button onClick={handleClick}>Open Modal</Button>

{isMobile < desktop ? (

      <ModalMobile isOpen={isOpen} onClose={onClose} options={options} setSwitchOption={setSwitchOption} switchOption={switchOption}>
        <FormEvent
          errors={errors}
          eventSubmit={handleSubmit(eventSubmit)}
          register={register}
        />
      </ModalMobile>
) :(

      <DrawerDesktop isOpen={isOpen} onClose={onClose} options={options} setSwitchOption={setSwitchOption} switchOption={switchOption}>
        <FormEvent
          errors={errors}
          eventSubmit={handleSubmit(eventSubmit)}
          register={register}
        />
      </DrawerDesktop>
)}
    </>
  );
};
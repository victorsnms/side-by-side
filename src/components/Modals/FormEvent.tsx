import {
  Flex,
  VStack,
  Text,
  HStack,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import { Input } from "../Input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  AiFillShop,
  AiOutlineCalendar,
  AiOutlineAlignLeft,
} from "react-icons/ai";
import { FaMapMarkerAlt, FaRegImage } from "react-icons/fa";
import { RiContactsBookFill, RiTimeLine } from "react-icons/ri";
import { ButtonForms } from "../ButtonForms";
import { Textarea } from "../TextareaForms";
import { useState } from "react";


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

export const FormEvent = () => {


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

  return (
    <Flex
      as="form"
      justifyContent="center"
      onSubmit={handleSubmit(eventSubmit)}
    >
      <VStack spacing="5" h="100%">
        <Text as="p">Create a new Event</Text>
       
        <Input
          icon={AiFillShop}
          placeholder="Event name"
          {...register("name")}
          error={errors.name}
        />
        <Input
          icon={FaMapMarkerAlt}
          placeholder="Address"
          error={errors.address}
          {...register("address")}
        />
        <Input
          icon={RiContactsBookFill}
          placeholder="Contact"
          error={errors.contact}
          {...register("contact")}
        />
        <HStack>
          <Input
            icon={AiOutlineCalendar}
            placeholder="Date"
            error={errors.date}
            {...register("date")}
          />
          <Input
            icon={RiTimeLine}
            placeholder="Time"
            error={errors.time}
            {...register("time")}
          />
        </HStack>
        <Textarea
          icon={AiOutlineAlignLeft}
          placeholder="Description..."
          error={errors.description}
          {...register("description")}
          h="5rem"
        />
        <Input
          icon={FaRegImage}
          placeholder="Cover picture url"
          error={errors.picture_url}
          {...register("picture_url")}
        />
        <Box flex="1" width="100%" textAlign="center">
          <ButtonForms type="submit" width={["75%", "75%"]} mt="2rem">
            Create
          </ButtonForms>
        </Box>
      </VStack>
    </Flex>
  );
};

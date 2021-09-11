import {  Flex,VStack, Text, Input as ChakraInput, Box } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input } from "../Input";
import {
  AiFillShop,
  AiOutlineCalendar,
} from "react-icons/ai";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import { RiContactsBookFill, RiTimeLine } from "react-icons/ri";
import { ButtonForms } from "../ButtonForms";
import { useState } from "react";



interface EventData {
  name: string;
  address: string;
  contact: string;
  material_type: string[]
  lat?: string;
  lgn?: string;
}

export const FormWasteCollection = () => {
  const [value,setValue] = useState("")

  const eventSchema = yup.object().shape({
    name: yup.string().required("Waste colection name required"),
    address: yup.string().required("Waste colectiona address required"),
    contact: yup.string().required("Email or cellphone required"),
    material_type: yup.string().required("Select one material type")
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(eventSchema) });

  const wasteCollectionSubmit = (data: EventData) => {
    console.log(data);
  };
  
  const handleClick = () => {
    //refatorar isso com useBrakpoint
  };



  return (
    <Flex as="form" justifyContent="center" onSubmit={handleSubmit(wasteCollectionSubmit)}>
    <VStack spacing="5" h="100%">
      <Text as="p">Create a new Event</Text>
      <Input
        icon={AiFillShop}
        placeholder="Local name"
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
       <ChakraInput
       variant="outline"
        icon={FaSearch}
        placeholder="..."
        type="text"
        value="value"
        onChange={(e) => setValue(e.target.value)}
      />

      <Box flex="1" width="100%" textAlign="center">
        <ButtonForms type="submit" width={["75%", "75%"]} mt="2rem">
          Create
        </ButtonForms>
      </Box>
    </VStack>
  </Flex>
  )
}
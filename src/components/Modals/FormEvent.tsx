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
import { eventDefaultData } from "../../utils/eventDefaultData";
import { InputMarker } from "../../types/makerData";

interface EventDataForm {
  title: string;
  address: string;
  contact: string;
  start_time: string;
  end_time: string;
  date: string;
  description: string;
  picture_url?: string;
}


export const FormEvent = ({inputMarker}:InputMarker) => {
  const { created_at, participants, picture_url, type } = eventDefaultData;

  const eventSchema = yup.object().shape({
    title: yup.string().required("Event name required"),
    address: yup.string().required("Eventa address required"),
    contact: yup.string().required("Email or cellphone required"),
    start_time: yup.string().required("Event start time required"),
    end_time: yup.string().required("Event end time required"),
    date: yup.string().required("Event date required"),
    description: yup.string().required("Event description required"),
    picture_url: yup.string().url("Url image invalid"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(eventSchema) });

  const eventSubmit = (data: EventDataForm) => {
    console.log(data);
  };

  return (
    <Flex
      as="form"
      justifyContent="center"
      onSubmit={handleSubmit(eventSubmit)}
    >
      <VStack spacing="5" h="100%">
        <Text as="p" color="green.400">
          Create a new Event
        </Text>

        <Input
          icon={AiFillShop}
          placeholder="Event name"
          {...register("title")}
          error={errors.title}
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
        <Input
          icon={AiOutlineCalendar}
          placeholder="Date"
          error={errors.date}
          {...register("date")}
        />
        <HStack>
          <Input
            icon={RiTimeLine}
            placeholder="Starts at:"
            error={errors.start_time}
            {...register("start_time")}
          />
          <Input
            icon={RiTimeLine}
            placeholder="Ends at:"
            error={errors.end_time}
            {...register("end_time")}
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

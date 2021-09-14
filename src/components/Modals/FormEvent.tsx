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
import { useMarkers } from "../../providers/MarkersContext";
import { useAuth } from "../../providers/AuthContext";
import { useEffect } from "react";
import { useUser } from "../../providers/UserContext";

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

export const FormEvent = ({ inputMarker }: InputMarker) => {
  const { picture_url_default, type } = eventDefaultData;
  const { createMarker, updateMyEvents } = useMarkers();
  const { accessToken, id } = useAuth();
  const { getUser, userData } = useUser();

  useEffect(() => {
    getUser(id, accessToken);
  }, []);

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
    const { picture_url } = data;
    const { email, image_url, name, id: idUser, my_events } = userData;
    const newData = {
      ...data,
      ...inputMarker[0],
      type: type,
      picture_url:
        picture_url?.length !== 0 ? picture_url : picture_url_default,
      participants: [
        { name: name, email: email, id: idUser, image_url: image_url },
      ],
    };
    const {
      address,
      contact,
      created_at,
      date,
      description,
      end_time,
      lat,
      lng,
      picture_url: data_picture_url,
      start_time,
      title,
    } = newData;
    const filteredData = {
      address: address,
      contact: contact,
      created_at: created_at,
      date: date,
      description: description,
      end_time: end_time,
      lat: lat,
      lng: lng,
      picture_url: data_picture_url,
      start_time: start_time,
      title: title,
    };
    createMarker(newData, accessToken);
    if (newData.type === "event") {
      updateMyEvents(id, accessToken, filteredData, my_events);
    }
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

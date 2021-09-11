import { Flex, VStack, Text, HStack, Box } from "@chakra-ui/react";
import {
  DeepMap,
  FieldError,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import { Input } from "../Input";
import {
  AiFillShop,
  AiOutlineCalendar,
  AiOutlineAlignLeft,
} from "react-icons/ai";
import { FaMapMarkerAlt, FaRegImage } from "react-icons/fa";
import { RiContactsBookFill, RiTimeLine } from "react-icons/ri";
import { ButtonForms } from "../ButtonForms";
import { Textarea } from "../TextareaForms";

interface ModalFormProps {
  eventSubmit: () => void;
  register: UseFormRegister<FieldValues>;
  errors: DeepMap<FieldValues, FieldError>;
}
export const FormEvent = ({
  eventSubmit,
  register,
  errors,
}: ModalFormProps) => {
  return (
    <Flex as="form" justifyContent="center" onSubmit={eventSubmit}>
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

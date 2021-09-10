import {
  Button,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Modal,
  Flex,
  VStack,
  Text,
  HStack,
  Textarea,
  useDisclosure,
  Icon,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToggleSwitch } from "../ToggleSwitch";
import { Input } from "../Input";
import {
  AiFillShop,
  AiOutlineCalendar,
  AiOutlineAlignLeft,
} from "react-icons/ai";
import { FaMapMarkerAlt, FaRegImage } from "react-icons/fa";
import { RiContactsBookFill, RiTimeLine } from "react-icons/ri";
import { ButtonForms } from "../ButtonForms";

interface EventData {
  name: string;
  address: string;
  contact: string;
  time: string;
  date: string;
  description: string;
  picture_url?: string;
  voluntaries: {
    name: string;
    id: string;
  }[];
  lat?: string;
  lgn?: string;
}

export const EventModal = () => {
  const options = ["Event", "Wast Point"];
  const { isOpen, onOpen, onClose } = useDisclosure();
  const eventSchema = yup.object().shape({
    name: yup.string().required("Event name required"),
    address: yup.string().required("Eventa address required"),
    contact: yup.string().required("Email or cellphone required"),
    time: yup.string().required("Event time required"),
    date: yup.string().required("Event date required"),
    description: yup.string().required("Event description required"),
    picture_url: yup.string().url(),
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
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered={[true, true, false, false]}
      >
        <ModalOverlay bg="green.70" />
        <ModalContent
          bg={"white"}
          mb={"0px"}
          alignSelf={"flex-end"}
          justifySelf="flex-start"
          h={["max-content", "inherit", "100%", "100%"]}
          width="100%"
          borderBottomRadius="none"
          textAlign="left"
        >
          <ModalCloseButton
            w="32px"
            alignSelf="flex-end"
            bg="transparent"
            outline="none"
            border="none"
            size="sm"
          />
          <ModalHeader display="flex" justifyContent="center">
            <ToggleSwitch options={options} />
          </ModalHeader>
          <ModalBody>
            <Flex
              as="form"
              justifyContent="center"
              onSubmit={handleSubmit(eventSubmit)}
            >
              <VStack>
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
                    placeholder="Date"
                    error={errors.date}
                    {...register("date")}
                  />
                </HStack>
                <InputGroup>
                  <InputLeftElement color={"gray.200"} fontSize="1em">
                    <Icon as={AiOutlineAlignLeft} />
                  </InputLeftElement>
                  <Textarea
                    as="textarea"
                    placeholder="Description..."
                    {...register("description")}
                  ></Textarea>
                </InputGroup>
                <Input
                  icon={FaRegImage}
                  placeholder="Cover picture url"
                  error={errors.date}
                  {...register("date")}
                />
              </VStack>
            </Flex>
          </ModalBody>
          <ModalFooter justifyContent="center">
            <ButtonForms type="submit" width={["75%", "75%"]}>
              Create
            </ButtonForms>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

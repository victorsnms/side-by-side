import { Wrap, WrapItem, Center } from "@chakra-ui/react";
import { useBoolean } from "@chakra-ui/hooks";
import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { types } from "../../utils/materialsTypesData";
import { filter } from "lodash";

interface RadioValuesProps {
  setMaterialsType: Dispatch<SetStateAction<string[]>>;
  materialsType: string[];
}

interface OptionsProps extends RadioValuesProps {
  type: string;
  index: number;
}

export const MaterialTypeComponent = ({
  type,
  index,
  materialsType,
  setMaterialsType,
}: OptionsProps) => {
  const [isChecked, setIsChecked] = useBoolean();
  const [backGround, setBackground] = useState("none");
  const [color, setColor] = useState("gray.200");
  const [bold, setBold] = useState("");
  
  useEffect(() => {
    
    setBackground(isChecked ? "green.300" : "none");
    setColor(isChecked ? "white" : "gray.200");
    setBold(isChecked ? "extrabold" : "");
    setMaterialsType(
      isChecked
        ? [type, ...materialsType]
        : materialsType.filter((item) => item !== type)
    );
  }, [isChecked]);

  const isAnOption = () => {
    setIsChecked.toggle();
  };

  return (
    <WrapItem
      key={index}
      border="solid 1px"
      borderColor="green.50"
      borderRadius="16px"
      p="4px 16px"
      cursor="pointer"
      id={`item${index}`}
      bg={backGround}
      onClick={isAnOption}
      _hover={{ bgColor: isChecked ? "green.400" : "gray.100" }}
    >
      <Center key={index}as="label" cursor="pointer" color={color} fontWeight={bold}>
        {type}
      </Center>
    </WrapItem>
  );
};

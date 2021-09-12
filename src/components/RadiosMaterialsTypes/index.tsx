import { Box, HStack } from "@chakra-ui/react";
import { useRadio, useRadioGroup, UseRadioProps } from "@chakra-ui/radio";
import { Dispatch, SetStateAction } from "toasted-notes/node_modules/@types/react";

interface RadioProps extends UseRadioProps {
  children: string
}

interface  RadioValuesProps {
  setMaterialsType: Dispatch<SetStateAction<string[]>>
  materialsType: string[]
}
export const RadiosMaterialsType = ({setMaterialsType, materialsType}:RadioValuesProps) => {
  function RadioCard(props: RadioProps) {
    const { getInputProps, getCheckboxProps } = useRadio(props);

    const input = getInputProps();
    const checkbox = getCheckboxProps();

    return (
      <Box as="label">
        <input {...input} name={props.children}  />
        <Box
        
          onChange={() => console.log([props.children, ...materialsType])}
          {...checkbox}
          cursor="pointer"
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
          _checked={{
            bg: "teal.600",
            color: "white",
            borderColor: "teal.600",
          }}
          _focus={{
            boxShadow: "outline",
          }}
          px={5}
          py={3}
        >
          {props.children}
        </Box>
      </Box>
    );
  }
  const options = ["react", "vue", "svelte"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: "react",
    onChange: console.log,
  });

  const group = getRootProps();
  return (
    <HStack {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio} >
            {value}
          </RadioCard>
        );
      })}
    </HStack>
  );
};

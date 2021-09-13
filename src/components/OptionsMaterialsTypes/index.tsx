import { Wrap, WrapItem, Center } from "@chakra-ui/react";
import { useBoolean } from "@chakra-ui/hooks";
import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { types } from "../../utils/materialsTypesData";
import { filter } from "lodash";
import { MaterialTypeComponent } from "./MaterialTypeComponent";

interface RadioValuesProps {
  setMaterialsType: Dispatch<SetStateAction<string[]>>;
  materialsType: string[];
}

interface OptionsProps extends RadioValuesProps {
  type: string;
  index: number;
}

export const OptionsMaterialsType = ({
  setMaterialsType,
  materialsType,
}: RadioValuesProps) => {
  return (
    <Wrap justify="space-evenly">
      {types.map((type: string, index: number) => (
        <MaterialTypeComponent
          index={index}
          type={type}
          materialsType={materialsType}
          setMaterialsType={setMaterialsType}
        />
      ))}
    </Wrap>
  );
};

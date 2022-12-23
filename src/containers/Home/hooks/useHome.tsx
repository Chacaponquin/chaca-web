import { useCallback, useContext } from "react";
import { AppConfigContext } from "../../../shared/context/AppConfigContext";
import {
  Schema,
  SubOption,
} from "../../../shared/interfaces/options.interface";

export const useHome = () => {
  const { schemas } = useContext(AppConfigContext);

  const findParent = useCallback(
    (p: string): Schema => {
      return schemas.find((el) => el.parent === p)!;
    },
    [schemas]
  );

  const findType = useCallback(
    (p: string, t: string): SubOption => {
      const foundParent = schemas.find((el) => el.parent === p)!;
      return foundParent.options.find((el) => el.name === t)!;
    },
    [schemas]
  );

  return { findParent, findType };
};

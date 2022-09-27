import { createContext, ReactElement, useEffect, useState } from "react";
import { DataTransform } from "../helpers/DataTransform";
import { ApiField, ApiFieldDocResp } from "../interfaces/api.interface";
import { FileConfigOption, NoUserLimits } from "../interfaces/config.iterface";
import {
  FieldOptions,
  FieldOptionsResp,
} from "../interfaces/options.interface";
import { API_ROUTES, axiosInstance } from "../routes/api/API_ROUTES";

const AppConfigContext = createContext<{
  noUserLimits: NoUserLimits;
  fieldsOptions: FieldOptions[];
  initialFetchLoading: boolean;
  errorInitialFetch: boolean;
  fileConfigOptions: FileConfigOption[];
  apiFields: ApiField[];
}>({
  noUserLimits: {} as any,
  errorInitialFetch: false,
  initialFetchLoading: true,
  fieldsOptions: [],
  fileConfigOptions: [],
  apiFields: [],
});

const AppConfigProvider = ({
  children = <></>,
}: {
  children: ReactElement;
}) => {
  const [noUserLimits, setNoUserLimits] = useState<NoUserLimits>({
    LIMIT_DATASETS: 3,
    LIMIT_DOCUMENTS: 500,
  });
  const [apiFields, setApiFields] = useState<ApiField[]>([]);
  const [fieldsOptions, setFieldsOptions] = useState<FieldOptions[]>([]);
  const [fileConfigOptions, setFileConfigOptions] = useState<
    FileConfigOption[]
  >([]);

  const [initialFetchLoading, setInitialFetchLoading] = useState(true);
  const [errorInitialFetch, setErrorInitialFetch] = useState(false);

  useEffect(() => {
    Promise.all([
      InitialFetchs.NO_USER_LIMITS(),
      InitialFetchs.FIELDS_OPTIONS(),
      InitialFetchs.FILE_CONFIG(),
      InitialFetchs.API_FIELDS(),
    ])
      .then((data) => {
        setNoUserLimits(data[0]);
        setFieldsOptions(DataTransform.initialFieldsTransform(data[1]));
        setFileConfigOptions(data[2]);
        setApiFields(DataTransform.apiDocTransform(data[3]));
      })
      .catch((error) => setErrorInitialFetch(true))
      .finally(() => setInitialFetchLoading(false));
  }, []);

  const data = {
    initialFetchLoading,
    errorInitialFetch,
    fieldsOptions,
    fileConfigOptions,
    noUserLimits,
    apiFields,
  };

  return (
    <AppConfigContext.Provider value={data}>
      {children}
    </AppConfigContext.Provider>
  );
};

const InitialFetchs = {
  NO_USER_LIMITS: async () => {
    const { data } = await axiosInstance.get<NoUserLimits>(
      API_ROUTES.GET_NO_USER_LIMITS
    );
    return data;
  },
  FIELDS_OPTIONS: async () => {
    return (await axiosInstance.get<FieldOptionsResp[]>(API_ROUTES.GET_FIELDS))
      .data;
  },
  FILE_CONFIG: async () => {
    return (
      await axiosInstance.get<FileConfigOption[]>(API_ROUTES.GET_FILE_OPTIONS)
    ).data;
  },
  API_FIELDS: async () => {
    return (
      await axiosInstance.get<ApiFieldDocResp[]>(API_ROUTES.GET_API_OPTIONS)
    ).data;
  },
};

export default AppConfigProvider;
export { AppConfigContext };

import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Schema } from "../../shared/interfaces/options.interface";
import { AppConfigContext } from "../../shared/context/AppConfigContext";
import { DataTransform } from "../../shared/helpers/DataTransform";

import "./api.css";
import { axiosInstance } from "../../shared/routes/api/API_ROUTES";

const Api = () => {
  const [findLoading, setFindLoading] = useState(false);
  const [findError, setFindError] = useState(false);

  const [content, setContent] = useState<string | Schema>("");

  const { section, option } = useParams();
  const { schemas } = useContext(AppConfigContext);

  useEffect(() => {
    if (section === "schemas") {
      const findSchema = schemas.find(
        (s) => DataTransform.titlePipe(s.parent) === section
      );

      if (findSchema) {
        setContent(findSchema);
      } else setFindError(true);
    } else {
      setFindLoading(true);

      axiosInstance
        .get<string>(`/docs/${section}/${option}`)
        .then(({ data }) => setContent(data))
        .catch((err) => setFindError(true))
        .finally(() => setFindLoading(false));
    }
  }, [section, schemas, option]);

  return <div className="w-full flex -translate-y-8 border-b-2">Api</div>;
};

const FetchError = () => {
  return <div>Error</div>;
};

export default Api;

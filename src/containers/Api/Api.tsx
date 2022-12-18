import ApiLeftPart from "../../shared/components/ApiLeftPart/ApiLeftPart";
import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Schema } from "../../shared/interfaces/options.interface";
import { AppConfigContext } from "../../shared/context/AppConfigContext";
import { DataTransform } from "../../shared/helpers/DataTransform";

import "./api.css";
import { axiosInstance } from "../../shared/routes/api/API_ROUTES";
import SchemaDoc from "./components/SchemaDoc";

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

  return (
    <div className="w-full flex -translate-y-8 border-b-2">
      <div className="w-[250px] min-w-[200px] lg:block hidden">
        <ApiLeftPart />
      </div>

      <div className="w-full flex lg:border-l-2 esm:px-7 px-12 lg:px-20 py-5">
        {findError ? (
          <FetchError />
        ) : (
          <React.Fragment>
            {section === "schemas" ? (
              <SchemaDoc schema={content as Schema} />
            ) : (
              <div>{content as string}</div>
            )}
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

const FetchError = () => {
  return <div>Error</div>;
};

export default Api;

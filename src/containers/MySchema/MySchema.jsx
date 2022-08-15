import React, { useState } from "react";
import { useLazyQuery, useQuery } from "../../shared/hooks/useQuery";
import { apiRoutes } from "../../shared/routes/api/apiRoutes";
import LoaderContainer from "../../shared/components/Loader/LoaderContainer";
import "./mySchema.css";
import SchemaCard from "./components/SchemaCard";
import { usePost } from "../../shared/hooks/usePost";
import { toast } from "react-toastify";
import noDataImage from "../../assets/images/no-data.png";

const MySchema = () => {
  const [schemas, setSchemas] = useState([]);

  const [refetchSchemas, { loading: refetchLoading }] = useLazyQuery({
    url: apiRoutes.GET_MY_SCHEMAS,
    onCompleted: (data) => setSchemas(data.schemas),
    onError: (err) => console.log(err),
  });

  const [deleteSchema, { loading: deleteLoading }] = usePost({
    url: apiRoutes.DELETE_SCHEMA,
    onCompleted: (data) => {
      refetchSchemas();
    },
    onError: (error) => toast.error("Hubo un error al eliminar el esquema"),
  });

  const { loading } = useQuery({
    onCompleted: (data) => {
      setSchemas(data.schemas);
    },
    onError: (err) => console.log(err),
    url: apiRoutes.GET_MY_SCHEMAS,
  });

  const handleDeleteSchema = (id) => {
    console.log(id);
    deleteSchema({ body: id });
  };

  return (
    <div className="w-full lg:px-20 px-4 md:px-10 flex justify-center">
      <LoaderContainer
        className={"mt-20"}
        loading={loading || refetchLoading || deleteLoading}
      >
        {schemas.length ? (
          <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-10">
            {schemas.map((el, i) => (
              <SchemaCard
                key={i}
                {...el}
                handleDeleteSchema={() => handleDeleteSchema(el._id)}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col w-full items-center">
            <img
              src={noDataImage}
              alt="noData"
              className="object-contain w-[400px]"
            />
            <h1 className="text-5xl font-fontBold mb-0 mt-5 text-slate-400">
              Sorry, not found schemas
            </h1>
          </div>
        )}
      </LoaderContainer>
    </div>
  );
};

export default MySchema;

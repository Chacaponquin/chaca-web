import React, { useState } from "react";
import { useLazyQuery, useQuery } from "../../shared/hooks/useQuery";
import { API_ROUTES } from "../../shared/routes/api/API_ROUTES";
import LoaderContainer from "../../shared/components/Loader/LoaderContainer";
import "./mySchema.css";
import SchemaCard from "./components/SchemaCard";
import { usePost } from "../../shared/hooks/usePost";
import { toast } from "react-toastify";
import { UserDataScehma } from "../../shared/interfaces/user.interface";
import { v4 as uuid } from "uuid";

const MySchema = () => {
  const [schemas, setSchemas] = useState<UserDataScehma[]>([]);

  const [refetchSchemas, { loading: refetchLoading }] = useLazyQuery({
    url: API_ROUTES.GET_MY_SCHEMAS,
    onCompleted: (data) => setSchemas(schemas),
    onError: (err) => console.log(err),
  });

  const [deleteSchema, { loading: deleteLoading }] = usePost({
    url: API_ROUTES.DELETE_SCHEMA,
    onCompleted: (data) => {
      refetchSchemas();
    },
    onError: (error) => toast.error("Hubo un error al eliminar el esquema"),
  });

  const { loading } = useQuery<UserDataScehma[]>({
    onCompleted: (data) => {
      setSchemas(data);
    },
    onError: (err) => console.log(err),
    url: API_ROUTES.GET_MY_SCHEMAS,
  });

  const handleDeleteSchema = (id: string) => {
    deleteSchema({ body: { id } });
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
                key={uuid()}
                {...el}
                handleDeleteSchema={() => handleDeleteSchema(el._id)}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col w-full items-center">
            <img
              src={"/images/no-data.png"}
              alt="noData"
              className="object-contain w-[400px] esm:w-[300px]"
            />
            <h1 className="text-5xl font-fontBold mb-0 mt-5 text-slate-400 text-center esm:text-3xl">
              No tienes Esquemas
            </h1>
          </div>
        )}
      </LoaderContainer>
    </div>
  );
};

export default MySchema;

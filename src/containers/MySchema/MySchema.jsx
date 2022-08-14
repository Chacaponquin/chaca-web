import React from "react";
import { useQuery } from "../../shared/hooks/useQuery";
import { apiRoutes } from "../../shared/routes/api/apiRoutes";

const MySchema = () => {
  useQuery({
    onCompleted: (data) => console.log(data),
    onError: (err) => console.log(err),
    url: apiRoutes.GET_MY_SCHEMAS,
  });

  return <div>MySchema</div>;
};

export default MySchema;

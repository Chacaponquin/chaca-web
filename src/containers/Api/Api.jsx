import React from "react";
import { useQuery } from "../../shared/hooks/useQuery";
import { apiRoutes } from "../../shared/routes/api/apiRoutes";
import LoaderContainer from "../../shared/components/Loader/LoaderContainer";

const Api = () => {
  const { loading } = useQuery({
    url: apiRoutes.GET_API_OPTIONS,
    onCompleted: (data) => console.log(data),
    onError: (error) => console.error(error),
  });

  if (loading) {
    return (
      <div className="w-full flex justify-center pt-10">
        <LoaderContainer
          loading={loading}
          className="w-[220px] esm:w-[120px]"
          children={<div></div>}
        />
      </div>
    );
  }

  return <div>Api</div>;
};

export default Api;

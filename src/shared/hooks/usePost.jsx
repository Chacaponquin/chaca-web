import { useState } from "react";
import { axiosInstance } from "../routes/api/apiRoutes";

export const usePost = ({ onCompleted, onError, url, body }) => {
  const [loading, setLoading] = useState(false);

  const request = () => {
    setLoading(true);
    axiosInstance
      .post(url, { data: body })
      .then(({ data }) => onCompleted(data))
      .catch(onError)
      .finally(() => setLoading(false));
  };

  return [request, { loading }];
};

import { useState } from "react";
import { axiosInstance } from "../routes/api/apiRoutes";

export const usePost = ({ onCompleted, onError, url, body: bodyFunction }) => {
  const [loading, setLoading] = useState(false);

  const request = (data = {}) => {
    setLoading(true);
    axiosInstance
      .post(url, { data: data.body ? data.body : bodyFunction })
      .then(({ data }) => onCompleted(data))
      .catch((error) => onError(error))
      .finally(() => setLoading(false));
  };

  return [request, { loading }];
};

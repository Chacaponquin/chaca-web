import { useEffect, useState } from "react";
import { axiosInstance } from "../routes/api/apiRoutes";

export const useQuery = ({ onCompleted, onError, url }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (url) {
      setLoading(true);
      axiosInstance
        .get(url)
        .then(({ data }) => onCompleted(data))
        .catch(onError)
        .finally(() => setLoading(false));
    }
  }, [url]);

  return { loading };
};

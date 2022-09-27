import { useEffect, useState } from "react";
import { axiosInstance } from "../routes/api/API_ROUTES";

interface UsePostProps<T> {
  onCompleted: (data: T) => void;
  onError: (error: Error) => void;
  url: string;
}

export function useQuery<T>({ onCompleted, onError, url }: UsePostProps<T>): {
  loading: boolean;
} {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (url) {
      setLoading(true);
      axiosInstance
        .get<T>(url)
        .then(({ data }) => onCompleted(data))
        .catch(onError)
        .finally(() => setLoading(false));
    }
  }, [url]);

  return { loading };
}

export function useLazyQuery<T>({
  url,
  onCompleted,
  onError,
}: UsePostProps<T>): [() => void, { loading: boolean }] {
  const [loading, setLoading] = useState(false);

  const request = () => {
    setLoading(true);
    axiosInstance
      .get<T>(url)
      .then(({ data }) => onCompleted(data))
      .catch((err) => onError(err))
      .finally(() => setLoading(false));
  };

  return [request, { loading }];
}

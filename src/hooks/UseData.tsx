import { useEffect, useState } from "react";
import apiClient from "../services/api-client.ts";
import { CanceledError } from "axios";

interface DataListResponse<T> {
  count: number;
  results: T[];
}

const useData = function <T>(endpoint: string) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const abortController = new AbortController();
    setIsLoading(true);
    apiClient
      .get<DataListResponse<T>>(endpoint, { signal: abortController.signal })
      .then((res) => {
        setData(res.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        if (error instanceof CanceledError) {
          return;
        }
        setError(error.message);
      });
  }, []);
  return { data, error, isLoading };
};

export default useData;

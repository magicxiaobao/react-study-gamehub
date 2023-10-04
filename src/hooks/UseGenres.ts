import { useEffect, useState } from "react";
import apiClient from "../services/api-client.ts";
import { CanceledError } from "axios";

interface Genre {
  id: number;
  name: string;
}

interface GenreListResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const abortController = new AbortController();
    setIsLoading(true);
    apiClient
      .get<GenreListResponse>("/genres", { signal: abortController.signal })
      .then((res) => {
        setGenres(res.data.results);
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
  return { genres, error, isLoading };
};

export default useGenres;

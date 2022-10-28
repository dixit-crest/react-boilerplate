import { useState, useEffect } from "react";
import axios from "axios";
import { REACT_APP_BACK_BASE_URL } from "../utils";

const axiosIntance = axios.create({
  // baseURL: REACT_APP_BACK_BASE_URL + "/api/v1"
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const useFetch = (axiosParams) => {
  const [data, setData] = useState(undefined);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axiosIntance.request(axiosParams);
      setData(response.data);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, error, isLoading, fetchData };
};

import { useState, useEffect } from "react";
import axios from "axios";
import { REACT_APP_BACK_BASE_URL } from "../utils";

const axiosIntance = axios.create({
  // baseURL: REACT_APP_BACK_BASE_URL + "/api/v1"
  baseURL: "https://jsonplaceholder.typicode.com",
});

/**
 * api instance of axios from `/utils` is recommended for api calls since the code for logging out and passing
 * the access token is already there.  
 * 
 * @param {{url: string, method: string}} axiosParams - Params that axios accepts
 *
 *
 * @returns {{data: Object, error: Error, isLoading: boolean, fetchData: Function}} axiosParams - axiosParams
 */
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

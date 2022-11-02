import { useState, useEffect } from "react";
import axios from "axios";
import { REACT_APP_PLACEHOLDER_API } from "../utils";

/**
 * Instance to be used with `useFetch` hook, You could pass different baseUrl and different
 * axios parameters ( headers, auth-tokens, ect ) here.
 */
const axiosIntance = axios.create({
  baseURL: REACT_APP_PLACEHOLDER_API,
});

/**
 * api instance of axios from `/utils` is recommended for api calls since the code for logging out when unauthorized 
 * or unauthenticated and passing the access token is already there.
 *
 * @param {{url: string, method: string}} axiosParams - Params that axios accepts
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

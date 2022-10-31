import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Button  from "../../components/common/Button";
import { ThemeContext } from "../../contexts/ThemeProvider";
import { useFetch } from "../../hooks/useFetch";
import classes from "./index.module.scss";

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  const { data, error, isLoading } = useFetch({
    url: "/posts",
  });

  useEffect(() => {
    if (data && !isLoading) {
      setPosts(data);
    }
  }, [data]);

  const { state, dispatch } = useContext(ThemeContext);
  
  const toggleTheme = () => {
    if (state.darkMode) {
      dispatch({ type: "LIGHTMODE" });
    } else {
      dispatch({ type: "DARKMODE" });
    }
  };

  return (
    <div
      className={`${classes.container} ${
        state.darkMode ? "bg-dark" : "bg-light"
      }`}
    >
      <h2 className={state.darkMode ? "text-white" : "text-dark"}>Welcome to home</h2>
      <Button onClick={toggleTheme}>Toggle theme</Button>
    </div>
  );
};

export default HomePage;

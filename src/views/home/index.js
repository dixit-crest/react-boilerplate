import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Button from "../../components/common/Button";
import { ThemeContext } from "../../contexts/ThemeProvider";
import { useFetch } from "../../hooks/useFetch";
import classes from "./index.module.scss";
import { Link } from "react-router-dom";

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
      className={classes.container}
    >
      <h2 className={state.darkMode ? "text-white" : "text-dark"}>
        Welcome to home
      </h2>
      <buttton className="btn btn-primary" onClick={toggleTheme}>
        Toggle theme
      </buttton>
      <Link to="/notes" className="btn btn-primary">
        Notes CRUD module
      </Link>
    </div>
  );
};

export default HomePage;

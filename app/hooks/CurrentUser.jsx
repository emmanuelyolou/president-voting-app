"use client";
import axios from "@/api/axios";
import cookie from "js-cookie";
import { createContext, useEffect, useState } from "react";

const CurrentUserContext = createContext({});

export const CurrentUserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [actualiser, setActualiser] = useState(false);

  useEffect(() => {
    if (cookie.get("userId")) {
      axios
        .get(`/utils/${cookie.get("userId")}`, {
          headers: { Authorization: cookie.get("token") },
        })
        .then(({ data }) => {
          setUser(data);
          //   console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <CurrentUserContext.Provider
      value={{ user, setUser, actualiser, setActualiser }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserContext;

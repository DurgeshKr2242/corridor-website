import React, { useEffect, useState, useContext, useRef } from "react";
import { useRouter } from "next/router";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  //? states
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isAccessToken, setIsAccessToken] = useState(false);
  const [editorState1, setEditorState1] = useState(null);
  const [editorState2, setEditorState2] = useState(null);
  const [editorState3, setEditorState3] = useState(null);
  const [data, setData] = useState(null);
  const [value, setValue] = useState(0);
  const [keys, setKeys] = useState([]);
  const componentRef = useRef();

  useEffect(() => {
    if (router.asPath == "/") {
      router.push("/create");
    }
  }, [router]);

  //? functions
  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  const getCookie = (cname) => {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  };

  const logout = () => {
    console.log("logout");
    setIsLoading(true);
    setBuisnessDetails({});
    setCookie("access-token", "", 7);
    setIsAccessToken(false);
  };

  const login = (x) => {
    setCookie("access-token", x, 7);
    router.push("/dashboard");
    setIsAccessToken(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        setIsLoading,
        editorState1,
        setEditorState1,
        editorState2,
        setEditorState2,
        editorState3,
        setEditorState3,
        data,
        setData,
        value,
        setValue,
        keys,
        setKeys,
        componentRef,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useGlobalAuthContext = () => {
  return useContext(AuthContext);
};

export { AuthContext, AuthProvider };

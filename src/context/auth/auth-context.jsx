import { createContext, useEffect, useReducer } from "react";
import { AuthReducer } from ".";

export const initial = {
  currentUser: JSON.parse(localStorage.getItem("user")) || null,
};

export const AuthContext = createContext(initial);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initial);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.currentUser));
  }, [state.currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser: state.currentUser, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

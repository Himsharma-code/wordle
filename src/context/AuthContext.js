import { createContext, useContext, useState } from "react";
const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    loading: false,
    data: {},
    error: null,
  });

  const value = {
    data: { user },
    actions: { setUser },
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

export { AuthContext, AuthProvider, useAuth };

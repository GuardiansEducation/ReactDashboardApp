import { useState } from "react";
import { MockAuthContext } from "./MockAuthContext";

export type AuthProviderProps = {
  children: React.ReactNode;
};

const MockAuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <MockAuthContext.Provider
      value={{
        isAuthenticated: isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {children}
    </MockAuthContext.Provider>
  );
};

export default MockAuthProvider;

import { useState } from "react";
import { MockAuthContext } from "./MockAuthContext";

export type AuthProviderProps = {
  children: React.ReactNode;
};

const MockAuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setAuth] = useState(true);

  return (
    <MockAuthContext.Provider
      value={{
        isAuthenticated: isAuthenticated,
        setAuth,
      }}
    >
      {children}
    </MockAuthContext.Provider>
  );
};

export default MockAuthProvider;

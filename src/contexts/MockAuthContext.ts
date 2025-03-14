import { createContext } from "react";

type MockAuthProviderType = {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MockAuthContext = createContext<MockAuthProviderType>({
  isAuthenticated: true,
  setIsAuthenticated: () => {},
});

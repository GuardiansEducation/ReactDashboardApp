import { createContext } from "react";

type MockAuthProviderType = {
  isAuthenticated: boolean;
  setAuth: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MockAuthContext = createContext<MockAuthProviderType>({
  isAuthenticated: true,
  setAuth: () => {},
});

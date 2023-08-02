import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { LoggedUser } from "../../types/main";

type UserProps = {
  user: LoggedUser | null;
  setUser: Dispatch<SetStateAction<null>>;
};

export const UserContext = createContext<UserProps>(null!);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

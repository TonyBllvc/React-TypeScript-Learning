import { createContext, useEffect, useState } from "react";

export interface User {
  name: string;
  age: string;
  isMarried: boolean;
}

export interface UserContextType {
  users: User[] | null;
  addUser: (user: User) => void;
  updateUser: (id: string) => void;
  deleteUser: (id: string) => void;
}

const contextInitialValue: UserContextType = {
  users: null,
  // addUser: (user: User) => {}, // I can decide to pass it as an object
  addUser: () => null,
  updateUser: () => null,
  deleteUser: () => null,
};

export const UserContext = createContext<UserContextType>(contextInitialValue);

interface Props {
  children: React.ReactNode;
}
export const UserProvider = (props: Props) => {
  // export const UserProvider = ({ children }: Props) => { // or I can destructure the props, and directly access the children, without having to write props.children
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    setUsers([
      {
        name: "John Doe",
        age: "30",
        isMarried: true,
      },
      {
        name: "Jane Doe",
        age: "25",
        isMarried: false,
      },
    ]);
  }, []);

  const addUser = (user: User) => null;
  const updateUser = (id: string) => null;
  const deleteUser = (id: string) => null;

  return (
    <UserContext.Provider value={{ users, addUser, updateUser, deleteUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

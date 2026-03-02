import { useContext } from "react";
import { UserContext } from "../context/userContext";

// Note: If you pass a props, without being explicit, it will be of type "any", which is not recommended in TypeScript.
export const UserContextComponent = () => {
  const { users, addUser, updateUser, deleteUser } = useContext(UserContext);

  return (
    <div>
      <h2> Usage of createContext and useContext </h2>
      {users?.map((user) => (
        <div key={user.name}>
          <p> Name {user.name}</p>
          <p> Age {user.age}</p>
          <p> Status: {user.isMarried ? "Married" : "Single"}</p>
        </div>
      ))}
    </div>
  );
};

import { useContext } from "react";
import { UserContext } from "../context/userContext";

interface Props {
  name: string;
  age: string;
  isMarried: boolean;
}

// Note: If you pass a props, without being explicit, it will be of type "any", which is not recommended in TypeScript.
export const UserContextComponent = (props: Props) => {
  const { users, addUser, updateUser, deleteUser } = useContext(UserContext);

  return (
    <div>
      <p> Name {props.name}</p>
      <p> Age {props.age}</p>
      <p> Status: {props.isMarried ? "Married" : "Single"}</p>
    </div>
  );
};

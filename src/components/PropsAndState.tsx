import { useState } from "react";

interface PersonProps {
  name: string;
  age: string;
  isMarried: boolean;
  // details: {
  //     hobbies: string[];
  //     profession: string;
  // };
}

// Note: If you pass a props, without being explicit, it will be of type "any", which is not recommended in TypeScript.
export const PropsAndState = (props: PersonProps) => {
  // export const Person = (props: { name: string }) => {

  const [isShowInfo, setIsShowInfo] = useState<boolean | null>(false); // So using a union type, we can allow the state to be either a boolean or null. This way, we can represent three states: true, false, and null (which can indicate an uninitialized state).

  const toggleInfo = () => {
    setIsShowInfo((prev) => !prev);
  };

  return (
    <div>
      <h2> Usage of Props and State </h2>
      {isShowInfo && (
        <>
          <p> Name {props.name}</p>
          <p> Age {props.age}</p>
          <p> Status: {props.isMarried ? "Married" : "Single"}</p>
        </>
      )}

      <button type="button" onClick={toggleInfo}>
        Toggle
      </button>
    </div>
  );
};

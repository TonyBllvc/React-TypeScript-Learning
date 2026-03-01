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
export const FormsAndInputs = (props: PersonProps) => {
    const [personBio, setPersonBio] = useState<string | null>(null);
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPersonBio(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault(); // Prevent the default form submission behavior
      alert(`Submitting Bio: ${personBio}`);
    }
  return (
    <div>
      <p> Name {props.name}</p>
      <p> Age {props.age}</p>
      <p> Status: {props.isMarried ? "Married" : "Single"}</p>

      <p>
        {props.name} Bio: {!personBio ? "No Bio Available" : personBio}
      </p>
          <input onChange={handleChange} />
          <form onSubmit={handleSubmit}>
              <button type="submit">
                  Submit
              </button>
          </form>
    </div>
  );
};

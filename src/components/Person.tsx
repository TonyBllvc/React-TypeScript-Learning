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
export const Person = (props: PersonProps) => {
  // export const Person = (props: { name: string }) => {
  return (
    <div>
      <p> Name {props.name}</p>
      <p> Age {props.age}</p>
      <p> Status: {props.isMarried ? "Married" : "Single"}</p>
    </div>
  );
};
